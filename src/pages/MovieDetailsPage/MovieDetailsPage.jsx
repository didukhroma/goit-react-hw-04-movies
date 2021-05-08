import React, { Component } from 'react';
import DetailedMovie from '../../component/DetailedMovie/DetailedMovie';
import Api from '../../utils/apiServices.js';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../component/Cast';
import Reviews from '../../component/Reviews';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    score: null,
    overview: null,
    genres: [],
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
    const result = await Api.getMovieInfo(movieId);
    this.setState({ ...result, movieId });
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

  render() {
    console.log(this.props);
    return (
      <div>
        <button type="button" onClick={this.backToPrevPage}>
          Go back
        </button>
        <DetailedMovie
          title={this.state.title}
          overview={this.state.overview}
          score={this.state.score}
          genres={this.state.genres}
          urlImg={this.state.img}
          year={this.state.year}
        />
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          exact
          path={`${this.props.match.url}/cast`}
          render={props => {
            return this.state.movieId && <Cast movieId={this.state.movieId} />;
          }}
        />
        <Route
          exact
          path={`${this.props.match.url}/reviews`}
          render={props => {
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
