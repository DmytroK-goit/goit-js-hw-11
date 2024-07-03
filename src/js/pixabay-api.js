document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('#search-form');

  searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchQuery = formData.get('query');

    if (searchQuery && searchQuery.trim()) {
      console.log('Форма відправлена з даними:');
      console.log(`Пошуковий запит: ${searchQuery}`);
      performSearch(searchQuery.trim());
    } else {
      console.log('Поле вводу пусте.');
      alert('Будь ласка, введіть пошуковий запит.');
    }
  });
});

function performSearch(query) {
  console.log(`Виконання пошуку для: ${query}`);
  // Логіка пошуку або обробки даних тут
}
