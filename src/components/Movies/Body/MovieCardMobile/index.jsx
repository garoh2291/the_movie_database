import * as moment from "moment";
import { IMG_URL } from "../../../../data";
import "./styles.css";

export const CardMobile = (props) => {
  const { movie } = props;
  const releaseDate = moment(movie.release_date).format("MMM DD, YYYY");
  return (
    <div className="movie_card_mobile">
      <div
        className="mobile_card_img"
        // style={{ backgroundImage: `url("${IMG_URL}${movie.poster_path}")` }}
      >
        {movie.poster_path ? (
          <img src={`${IMG_URL}${movie.poster_path}`} alt={`${movie.title}`} />
        ) : (
          ""
        )}
      </div>
      <div className="mobile_info">
        <div className="mobile_title">
          <h2>{movie.title}</h2>
          <p>{releaseDate}</p>
        </div>
        <div className="mobile_description">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
