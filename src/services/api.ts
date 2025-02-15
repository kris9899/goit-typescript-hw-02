import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = '3gIIIM2bS156v9qBHlFaqNiYgu7OawkzhG8qq_gTTyU';

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}
interface Response {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page = 1
): Promise<Response> => {
  const response = await axios.get<Response>(BASE_URL, {
    params: { query, page, per_page: 12, client_id: API_KEY },
  });
  return response.data;
};
