import { lazy } from 'react';

const AsyncHomePage = lazy(() => import('../pages/HomePage'));
const AsyncMoviesPage = lazy(() => import('../pages/MoviesPage'));
const AsyncMovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

const routes = [
  {
    id: 'HomePage',
    path: '/',
    component: AsyncHomePage,
    exact: true,
    text: 'Home',
  },
  {
    id: 'MoviesPage',
    path: '/movies',
    component: AsyncMoviesPage,
    exact: true,
    text: 'Movies',
  },
  {
    id: 'MovieDetailsPage',
    path: '/movies/:movieId',
    component: AsyncMovieDetailsPage,
  },
];
//----------------------------
const home = routes.find(({ id }) => id === 'HomePage');
const movies = routes.find(({ id }) => id === 'MoviesPage');
const navPath = [home, { ...movies, exact: false }];
//----------------------------
export { routes, navPath };
