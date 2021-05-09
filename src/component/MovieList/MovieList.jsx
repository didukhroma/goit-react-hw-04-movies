import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';
const MovieList = ({ movies, match, location }) => {
  return (
    <ul className={styles.list}>
      {movies.length > 0 &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: `${match.path}${location.search}` },
                }}
                className={styles.listItem}
              >
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
};
export default withRouter(MovieList);
