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
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <p>Likes: ${image.likes}</p>
      </div>
    `;
    })
    .join('');

  gallery.innerHTML = markup;
}
