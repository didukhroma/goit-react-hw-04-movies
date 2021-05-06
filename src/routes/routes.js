import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

const routes = [
  {
    id: 'HomePage',
    path: '/',
    component: HomePage,
    exact: true,
    text: 'Home',
  },
  {
    id: 'MoviesPage',
    path: '/movies',
    component: MoviesPage,
    exact: true,
    text: 'Movies',
  },
  {
    id: 'MovieDetailsPage',
    path: '/movies/:movieId',
    component: MovieDetailsPage,
  },
];
//----------------------------
const home = routes.find(({ id }) => id === 'HomePage');
const movies = routes.find(({ id }) => id === 'MoviesPage');
const navPath = [home, movies];
//----------------------------
export { routes, navPath };
