import { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cast from '../../component/Cast';
import Reviews from '../../component/Reviews';

class AddInfo extends Component {
  render() {
    const { match, location, movieId } = this.props;
    return (
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: `${location.state.from}` },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: `${location.state.from}` },
              }}
            >
              Reviews
            </NavLink>
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
            return movieId && <Reviews movieId={movieId} />;
          }}
        />
      </div>
    );
  }
}
AddInfo.propTypes = {
  movieId: PropTypes.string,
};
export default withRouter(AddInfo);
