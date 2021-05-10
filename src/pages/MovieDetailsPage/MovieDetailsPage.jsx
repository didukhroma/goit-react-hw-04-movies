import { Component } from 'react';
import DetailedInfo from '../../component/DetailedInfo';
import Api from '../../utils/apiServices.js';
import Button from '../../component/Button/Button';
import AddInfo from '../../component/AddInfo/AddInfo';

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
      img: poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`,
      year: release_date.split('-')[0],
    };
    return normalizedResult;
  };

  render() {
    const { title, score, genres, img, year, movieId } = this.state;
    return (
      <div>
        <Button type="button" cbOnClick={this.backToPrevPage} text="Go back" />
        <DetailedInfo
          title={title}
          overview={title}
          score={score}
          genres={genres}
          urlImg={img}
          year={year}
        />
        <AddInfo movieId={movieId} />
      </div>
    );
  }
}

export default MovieDetailsPage;
