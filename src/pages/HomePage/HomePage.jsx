import React, { Component } from 'react';
import MovieList from '../../component/MovieList/MovieList';
import Api from '../../utils/apiServices.js';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const trendingMovies = await Api.getDayTendingMovies();
    this.setState(() => ({ movies: [...trendingMovies] }));
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        {this.state.movies.length > 0 && (
          <MovieList movies={this.state.movies} />
        )}
      </div>
    );
  }
}

export default HomePage;
