import axios from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let searchQuery = '';
let page = 1;

// Функція для створення розмітки картки зображення
const createImageCard = (image) => {
  const card = document.createElement('li');
  card.innerHTML = `
    <div class="card">
      <img src="${image.webformatURL}" alt="${image.tags}" />
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

// Функція для додавання карток зображень до галереї
const addImagesToGallery = (images) => {
  const gallery = document.querySelector('.images');
  images.forEach((image) => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });
  
  // Після додавання карток визиваємо метод refresh() для оновлення SimpleLightbox
  if (images.length > 0) {
    const lightbox = new SimpleLightbox('.images a');
    lightbox.refresh();
  }
};

const performSearch = async () => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '42394453-5b1f47b766fae7b80cadc39a1',
        q: searchQuery,
        page: page,
        per_page: 15
      }
    });

    const images = response.data.hits;

    addImagesToGallery(images);

    const loadMoreBtn = document.querySelector('.load-more');
    if (images.length < 15) {
      loadMoreBtn.style.display = 'none';
      alert("We're sorry, but you've reached the end of search results.");
    } else {
      loadMoreBtn.style.display = 'block';
    }

    const cardHeight = document.querySelector('.images li').offsetHeight;
    window.scrollBy(0, cardHeight * 2);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

document.querySelector('.form').addEventListener('submit', async event => {
  event.preventDefault();
  searchQuery = event.target.input.value;
  page = 1; 
  const gallery = document.querySelector('.images');
  gallery.innerHTML = ''; // Очищаємо галерею перед новим пошуком
  performSearch();
});

document.querySelector('.load-more').addEventListener('click', () => {
  page++;
  performSearch();
});

