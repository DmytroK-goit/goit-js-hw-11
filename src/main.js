import { performSearch } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('#search-form');

  if (!searchForm) {
    console.error('Форма не знайдена.');
    return;
  }
  searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchQuery = formData.get('query');

    if (searchQuery && searchQuery.trim()) {
      console.log(`Пошуковий запит: ${searchQuery.trim()}`);
      performSearch(searchQuery.trim())
        .then(images => renderImages(images))
        .catch(error => console.log(error));
    } else {
      alert('Будь ласка, введіть пошуковий запит.');
    }
  });
});
