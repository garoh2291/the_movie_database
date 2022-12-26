import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";

import { IMG_URL } from "../../../../data";
import { getPopularity } from "../../../../helpers";

import "./styles.css";

export const MovieCard = (props) => {
  const [isAdditional, setIsAdditional] = useState(false);

  const { movie } = props;
  const releaseDate = moment(movie.release_date).format("MMM DD, YYYY");

  const changeAdditional = () => {
    setIsAdditional((prev) => !prev);
  };

  return (
    <div className={`movie-card-box ${isAdditional ? "open-settings" : ""}`}>
      <div className="cover-card"></div>
      <div className="more-settings">
        <div className="setting">
          <p>Want to rate or add this item to a list?</p>
          <Link to={"/login"}>
            Login <i className="bx bxs-chevron-right"></i>
          </Link>
        </div>
        <div className="setting">
          <p>Not a member?</p>
          <Link to={"/login"}>
            Sign up and join the community{" "}
            <i className="bx bxs-chevron-right"></i>
          </Link>
        </div>
      </div>
      <div className="movie-img">
        {movie.poster_path ? (
          <img src={`${IMG_URL}${movie.poster_path}`} alt={`${movie.title}`} />
        ) : (
          ""
        )}
        <div className="additional-details">
          <img
            data-id="setting"
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
            alt="additional_menu"
            onClick={changeAdditional}
          />
        </div>
        <div
          className="raiting-details"
          style={{
            border: `3px solid ${getPopularity(movie.vote_average * 10)}`,
          }}
        >
          {movie.vote_average ? (
            <p>
              {movie.vote_average * 10}
              <sup>%</sup>
            </p>
          ) : (
            "NR"
          )}
        </div>
      </div>

      <div className="additional-details-content">
        <h2>{movie.title}</h2>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};
