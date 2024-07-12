import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

export function performSearch(searchQuery) {
  const API_KEY = '44758497-ea11318ae0823ef09cb8fbdb5';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    searchQuery
  )}&image_type=photo`;

  showLoader();

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Не вдалося виконати запит.');
      }
      return response.json();
    })
    .then(data => {
      hideLoader();
      if (data.totalHits > 0) {
        iziToast.show({
          position: 'topRight',
          backgroundColor: 'green',
          message: `Found ${data.totalHits} results.`,
        });
        return data.hits;
      } else {
        iziToast.show({
          position: 'topRight',
          backgroundColor: 'red',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return [];
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.show({
        position: 'topRight',
        backgroundColor: 'red',
        message: 'Error during the request. Please try again later.',
      });
      throw error;
    });
}
