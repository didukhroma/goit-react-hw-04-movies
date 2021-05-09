import React, { Component } from 'react';
import Api from '../../utils/apiServices';
import MovieList from '../../component/MovieList';

class MoviesPage extends Component {
  state = {
    query: null,
    movies: [],
  };
  componentDidMount() {
    const query = this.getQueryFromProps(this.props);
    if (!query) return;
    this.getMovies(query);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = this.getQueryFromProps(prevProps);
    const nextQuery = this.getQueryFromProps(this.props);
    if (prevQuery !== nextQuery) {
      this.setState(() => ({ movies: [] }));
      this.getMovies(nextQuery);
    }
  }

  getQueryFromProps(props) {
    const searchString = props.location.search;
    const searchQuery = new URLSearchParams(searchString);
    const query = searchQuery.get('query');
    return query;
  }

  handleChange = event => {
    const {
      target: { value },
    } = event;

    this.setState(() => ({
      query: value,
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.onQueryChange();
  };

  onQueryChange = () => {
    this.props.history.push({
      search: `query=${this.state.query}`,
    });
  };

  getMovies = async query => {
    try {
      const response = await Api.getMoviesByQuery(query);
      const {
        data: { results },
      } = response;
      this.setState(prev => ({
        movies: [...prev.movies, ...results],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>MoviesPage</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
