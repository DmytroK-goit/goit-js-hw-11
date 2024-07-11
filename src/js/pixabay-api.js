import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

export async function performSearch(searchQuery) {
  const API_KEY = '44758497-ea11318ae0823ef09cb8fbdb5';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    searchQuery
  )}&image_type=photo`;

  try {
    showLoader();
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Не вдалося виконати запит.');
    }
    const data = await response.json();
    hideLoader();
    if (data.totalHits > 0) {
      iziToast.show({
        position: 'topRight',
        backgroundColor: `green`,
        message: `Found ${data.totalHits} results.`,
      });

      return data.hits;
    } else {
      iziToast.show({
        position: 'topRight',
        backgroundColor: `red`,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return [];
    }
  } catch (error) {
    hideLoader();
    // console.error('Помилка під час виконання запиту:', error);
    throw error;
  }
}
