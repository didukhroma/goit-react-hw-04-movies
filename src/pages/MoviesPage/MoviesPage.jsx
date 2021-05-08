import React, { Component } from 'react';
import Api from '../../utils/apiServices';
import MovieList from '../../component/MovieList';

class MoviesPage extends Component {
  state = {
    query: null,
    movies: [],
    page: 1,
  };
  componentDidMount() {
    const query = this.getQueryFromProps(this.props);
    if (!query) return;
    this.getMovies(query, this.state.page);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = this.getQueryFromProps(prevProps);
    const nextQuery = this.getQueryFromProps(this.props);
    if (prevQuery !== nextQuery) {
      this.setState(() => ({ movies: [], page: 1 }));
      this.getMovies(nextQuery, this.state.page);
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
    this.setState(() => ({ page: 1 }));
  };

  getMovies = async (query, page) => {
    const response = await Api.getMoviesByQuery(query, page);
    const { results } = response;
    this.setState(prev => ({
      movies: [...prev.movies, ...results],
      page: prev.page + 1,
    }));
  };
  handleLoadMore = () => {
    this.getMovies(this.state.query, this.state.page);
  };

  render() {
    return (
      <>
        <h1>MoviesPage</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieList movies={this.state.movies} />
        {this.state.page !== 1 && (
          <button type="button" onClick={this.handleLoadMore}>
            Load more
          </button>
        )}
      </>
    );
  }
}

export default MoviesPage;
