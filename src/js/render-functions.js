import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('#gallery');
  if (!gallery) {
    console.error('Елемент #gallery не знайдений в DOM.');
    return;
  }

  if (images.length === 0) {
    gallery.innerHTML = '<p>Нічого не знайдено.</p>';
    return;
  }

  const markup = images
    .map(image => {
      return `
      <div class="image-card">
      <a href="${image.webformatURL}">
    <img src="${image.webformatURL}" alt="" title="" />
  </a>
  <a href="${image.largeImageURL}">
    <img src="${image.largeImageURL}" alt="" title="${image.tags}" />
  </a>
        <p>views: ${image.views}</p>
        <p>comments: ${image.comments}</p>
        <p>downloads: ${image.downloads}</p>
      </div>
    `;
    })
    .join('');

  gallery.innerHTML = markup;
}
const lightbox = new SimpleLightbox('.gallery', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['&larr;', '&rarr;'],
  closeText: '&times;',
});
