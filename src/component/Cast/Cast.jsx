import { Component } from 'react';
import PropTypes from 'prop-types';
import Api from '../../utils/apiServices';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    try {
      const { movieId } = this.props;
      const response = await Api.getMovieCast(movieId);
      const {
        data: { cast },
      } = response;
      this.setState({ cast: [...cast] });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast.length > 0 && (
          <div>
            <ul>
              {cast.map(({ id, name, character, profile_path }) => (
                <li key={id}>
                  <img
                    className={styles.img}
                    src={
                      profile_path &&
                      `https://image.tmdb.org/t/p/w500${profile_path}`
                    }
                    alt={`Poster ${name}`}
                  />
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}
Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Cast;
