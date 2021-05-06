import styles from './DetailedMovie.module.css';
const DetailedMovie = ({ title, score, overview, genres, urlImg, year }) => {
  console.log(year);
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

export default DetailedMovie;
