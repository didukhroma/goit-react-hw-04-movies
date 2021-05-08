import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styles from './MovieList.module.css';
const MovieList = props => {
  console.log(props);
  const { movies, match, location } = props;
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

export default withRouter(MovieList);
