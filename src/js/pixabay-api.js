export async function performSearch(searchQuery) {
  const API_KEY = '44758497-ea11318ae0823ef09cb8fbdb5';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    searchQuery
  )}&image_type=photo`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Не вдалося виконати запит.');
    }
    const data = await response.json();
    if (data.totalHits > 0) {
      console.log(`Знайдено ${data.totalHits} результатів.`);
      return data.hits;
    } else {
      console.log('Нічого не знайдено.');
      return [];
    }
  } catch (error) {
    console.error('Помилка під час виконання запиту:', error);
    throw error;
  }
}
