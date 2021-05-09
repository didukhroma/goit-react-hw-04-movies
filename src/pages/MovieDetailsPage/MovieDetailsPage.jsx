import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import DetailedMovie from '../../component/DetailedMovie/DetailedMovie';
import Api from '../../utils/apiServices.js';
import Cast from '../../component/Cast';
import Reviews from '../../component/Reviews';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    score: null,
    overview: null,
    genres: null,
    img: null,
    year: null,
    movieId: null,
  };
  async componentDidMount() {
    const {
      match: {
        params: { movieId },
      },
    } = this.props;
    try {
      const response = await Api.getMovieInfo(movieId);
      const result = this.normalizedMovieResponse(response);
      this.setState({ ...result, movieId });
    } catch (error) {
      console.log(error);
    }
  }
  backToPrevPage = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (!state?.from) {
      history.push('/');
      return;
    }
    history.push(state.from);
  };
  normalizedMovieResponse = data => {
    const {
      data: {
        title,
        overview,
        vote_average,
        genres,
        poster_path,
        release_date,
      },
    } = data;
    const normalizedResult = {
      title: title,
      score: vote_average * 10,
      overview: overview,
      genres: genres.flatMap(genre => genre.name).join(' '),
      img: `https://image.tmdb.org/t/p/w500${poster_path}`,
      year: release_date.split('-')[0],
    };
    return normalizedResult;
  };

  render() {
    const { title, score, genres, img, year, movieId } = this.state;
    const { match } = this.props;
    return (
      <div>
        <button type="button" onClick={this.backToPrevPage}>
          Go back
        </button>
        <DetailedMovie
          title={title}
          overview={title}
          score={score}
          genres={genres}
          urlImg={img}
          year={year}
        />
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          exact
          path={`${match.url}/cast`}
          render={() => {
            return movieId && <Cast movieId={movieId} />;
          }}
        />
        <Route
          exact
          path={`${match.url}/reviews`}
          render={() => {
            return (
              this.state.movieId && <Reviews movieId={this.state.movieId} />
            );
          }}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
