import axios from 'axios';
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


let searchQuery = '';
let page = 1;


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


    const gallery = document.querySelector('.images');
    const loadMoreBtn = document.querySelector('.load-more');


    images.forEach(image => {
      const li = document.createElement('li');
      li.innerHTML = `<img src="${image.webformatURL}" alt="${image.tags}" />`;
      gallery.appendChild(li);
    });


    if (images.length < 15) {
      loadMoreBtn.style.display = 'none';
      alert("We're sorry, but you've reached the end of search results.");
    } else {
      loadMoreBtn.style.display = 'block';
    }


    const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
    window.scrollBy(0, cardHeight * 2);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};


document.querySelector('.form').addEventListener('submit', async event => {
  event.preventDefault();
  searchQuery = event.target.input.value;
  page = 1; 
  performSearch();
});


document.querySelector('.load-more').addEventListener('click', () => {
  page++;
  performSearch();
});