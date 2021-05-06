import { Link } from 'react-router-dom';
const MovieList = ({ movies, url }) => {
  return (
    <ul>
      {movies.length > 0 &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${url}movies/${id}`}>{title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
