import { performSearch } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM повністю завантажений і готовий.');
  const searchForm = document.querySelector('#search-form');

  if (!searchForm) {
    console.error('Форма не знайдена.');
    return;
  }
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Обробка події submit.');
    const formData = new FormData(event.target);
    const searchQuery = formData.get('query');

    if (searchQuery && searchQuery.trim()) {
      console.log('Форма відправлена з даними:');
      console.log(`Пошуковий запит: ${searchQuery.trim()}`);
      performSearch(searchQuery.trim())
        .then(images => renderImages(images))
        .catch(error => console.log(error));
    } else {
      console.log('Поле вводу пусте.');
      alert('Будь ласка, введіть пошуковий запит.');
    }
  });
});
