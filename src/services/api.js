import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = '3gIIIM2bS156v9qBHlFaqNiYgu7OawkzhG8qq_gTTyU';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: { query, page, per_page: 12, client_id: API_KEY },
  });
  return response.data;
};
