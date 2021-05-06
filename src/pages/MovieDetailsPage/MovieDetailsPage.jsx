import React, { Component } from 'react';
import DetailedMovie from '../../component/DetailedMovie/DetailedMovie';
import Api from '../../utils/apiServices.js';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    score: null,
    overview: null,
    genres: [],
    img: null,
    year: null,
  };
  async componentDidMount() {
    const {
      match: {
        params: { movieId },
      },
    } = this.props;
    const result = await Api.getMovieInfo(movieId);
    this.setState({ ...result });
  }

  render() {
    return (
      <div>
        <button type="button">Go back</button>
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
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    );
  }
}

export default MovieDetailsPage;
