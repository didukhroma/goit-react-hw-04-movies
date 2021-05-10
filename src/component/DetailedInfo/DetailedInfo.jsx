import PropTypes from 'prop-types';
import styles from './DetailedInfo.module.css';
const DetailedInfo = ({ title, score, overview, genres, urlImg, year }) => {
  return (
    <div className={styles.box}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={urlImg} alt={`Poster ${title}`} />
      </div>
      <div className={styles.description}>
        <h2>
          {title}({year})
        </h2>
        <span>User Score : {score}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};
DetailedInfo.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
  urlImg: PropTypes.string,
  year: PropTypes.string,
};
export default DetailedInfo;
