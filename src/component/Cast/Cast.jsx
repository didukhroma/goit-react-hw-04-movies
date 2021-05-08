import { Component } from 'react';
import Api from '../../utils/apiServices';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const response = await Api.getMovieCast(this.props.movieId);
    this.setState({ cast: [...response] });
  }

  render() {
    return (
      <>
        {this.state.cast.length > 0 && (
          <div>
            <h2>Cast</h2>
            <ul>
              {this.state.cast.map(item => (
                <li key={item.id}>
                  <img
                    className={styles.img}
                    src={
                      item.profile_path &&
                      `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    }
                    alt={`Poster ${item.name}`}
                  />
                  <p>{item.name}</p>
                  <p>Character: {item.character}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Cast;
