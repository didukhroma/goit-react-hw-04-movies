import axios from 'axios';
import settings from '../settings/settings';
const { BASE_URL, API_KEY } = settings;

class ApiService {
  async getDayTendingMovies() {
    const response = await axios.get(
      `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`,
    );

    return response;
  }
  async getMovieInfo(id) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    return response;
  }
  async getMovieCast(id) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );

    return response;
  }
  async getMovieReviews(id) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    return response;
  }
  async getMoviesByQuery(query, page) {
    const response = await axios.get(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&page=1&query=${query}&include_adult=false&language=en`,
    );
    return response;
  }
}

const Api = new ApiService();
export default Api;
