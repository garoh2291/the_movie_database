import * as moment from "moment";

import { IMG_URL } from "../../../../data";

import "./styles.css";

export const CardMobile = (props) => {
  const { movie } = props;
  const releaseDate = moment(movie.release_date).format("MMM DD, YYYY");
  return (
    <div className="movie-card-mobile">
      <div className="mobile-card-img">
        {movie.poster_path ? (
          <img src={`${IMG_URL}${movie.poster_path}`} alt={`${movie.title}`} />
        ) : (
          ""
        )}
      </div>
      <div className="mobile-info">
        <div className="mobile-title">
          <h2>{movie.title}</h2>
          <p>{releaseDate}</p>
        </div>
        <div className="mobile-description">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
