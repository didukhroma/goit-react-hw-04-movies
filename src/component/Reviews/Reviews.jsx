import { Component } from 'react';
import Api from '../../utils/apiServices';
import PropTypes from 'prop-types';
class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    try {
      const { movieId } = this.props;
      const response = await Api.getMovieReviews(movieId);
      const {
        data: { results },
      } = response;
      this.setState({ reviews: [...results] });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length === 0 && (
          <h3>We don't have any reviews for this movie</h3>
        )}
        {reviews.length > 0 && (
          <div>
            <ul>
              {reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <p>Author: {author}</p>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}
Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
