import axios from 'axios';
// import { BASE_URL, API_KEY } from '../settings/settings.js';
import settings from '../settings/settings';
const { BASE_URL, API_KEY } = settings;

class ApiService {
  constructor() {
    this.query = null;
  }
  async getDayTendingMovies() {
    const response = await axios.get(
      `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`,
    );
    const {
      data: { results },
    } = response;
    return results;
  }
  async getMovieInfo(id) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const {
      data: {
        title,
        overview,
        vote_average,
        genres,
        poster_path,
        release_date,
      },
    } = response;
    const result = {
      title: title,
      score: vote_average * 10,
      overview: overview,
      genres: genres.flatMap(genre => genre.name).join(' '),
      img: `https://image.tmdb.org/t/p/w500${poster_path}`,
      year: release_date.split('-')[0],
    };
    return result;
  }
  async getMovieCast() {
    return console.log('Cast');
  }
  async getMovieReviews() {
    return console.log('Reviews');
  }
}

const Api = new ApiService();
export default Api;
