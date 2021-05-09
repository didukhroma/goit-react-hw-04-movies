import React, { Component } from 'react';
import MovieList from '../../component/MovieList/MovieList';
import Api from '../../utils/apiServices.js';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    try {
      const response = await Api.getDayTendingMovies();
      const {
        data: { results },
      } = response;
      this.setState(() => ({ movies: [...results] }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    );
  }
}

export default HomePage;
