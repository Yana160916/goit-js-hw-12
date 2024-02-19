
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let searchQuery = '';
let page = 1;

const createImageCard = (image) => {
  const card = document.createElement('li');
  card.innerHTML = `
    <div class="card">
      <a href="${image.largeImageURL}" data-lightbox="gallery">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="details">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </div>
  `;
  return card;
};

const addImagesToGallery = (images) => {
  const gallery = document.querySelector('.images');
  images.forEach((image) => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });

  const loadMoreBtn = document.querySelector('.load-more');
  if (images.length < 15) {
    loadMoreBtn.style.display = 'none';
    iziToast.info({
      title: 'End of Results',
      message: "We're sorry, but you've reached the end of search results."
    });
  } else {
    loadMoreBtn.style.display = 'block';
  }

  const lightbox = new SimpleLightbox('.images a');
  lightbox.refresh();
};

const performSearch = async () => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '42394453-5b1f47b766fae7b80cadc39a1',
        q: searchQuery,
        page: page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
      }
    });

    const images = response.data.hits;

    addImagesToGallery(images);

    if (images.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'No images found for the given search query.'
      });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Error fetching images. Please try again.'
    });
  }
};

document.querySelector('.form').addEventListener('submit', async (event) => {
  event.preventDefault();
  searchQuery = event.target.input.value;
  page = 1;
  const gallery = document.querySelector('.images');
  gallery.innerHTML = ''; // Clear the gallery before a new search
  performSearch();
});

document.querySelector('.load-more').addEventListener('click', () => {
  page++;
  performSearch();
});

document.addEventListener('DOMContentLoaded', () => {
  // Ініціалізуйте SimpleLightbox при завантаженні сторінки
  const lightbox = new SimpleLightbox('.images a');
});