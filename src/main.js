import { performSearch } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const searchQuery = formData.get('query');

  if (searchQuery && searchQuery.trim()) {
    // console.log(`Пошуковий запит: ${searchQuery.trim()}`);

    performSearch(searchQuery.trim())
      .then(results => {
        console.log(results);
        renderImages(results);
      })
      .catch(error => {
        console.error('Помилка при виконанні запиту:', error);
      });
  } else {
    alert('Будь ласка, введіть пошуковий запит.');
  }
});
