import React, { memo, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { IMG_URL } from "../../../../data";
import { getPopularity } from "../../../../helpers";

import { MenuContext } from "../../../../context";

import {
  MovieCardBox,
  MovieImg,
  MovieSetting,
  StyledCover,
  MovieInfo,
} from "./MovieCard.styled";

export const MovieCard = memo(
  ({
    movie: { id, poster_path, title, overview, vote_average, release_date },
  }) => {
    const { isAdditional, setIsAdditional, changeAdditional } =
      useContext(MenuContext);

    const showMore = useRef(null);

    useEffect(() => {
      //closing opened menu , when clicked outside
      function handleClickOutside(e) {
        if (showMore.current && !showMore.current.contains(e.target)) {
          setIsAdditional("");
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showMore, setIsAdditional]);

    const releaseDate = moment(release_date).format("MMM DD, YYYY");

    return (
      <MovieCardBox>
        <StyledCover layout={isAdditional === id && "visible"}></StyledCover>
        <MovieSetting dp={isAdditional === id && "block"}>
          <div>
            <p>Want to rate or add this item to a list?</p>
            <Link to={"/login"}>
              Login <i className="bx bxs-chevron-right"></i>
            </Link>
          </div>
          <div>
            <p>Not a member?</p>
            <Link to={"/login"}>
              Sign up and join the community{" "}
              <i className="bx bxs-chevron-right"></i>
            </Link>
          </div>
        </MovieSetting>
        <MovieImg bd={`3px solid ${getPopularity(vote_average * 10)}`}>
          {poster_path ? (
            <img src={`${IMG_URL}${poster_path}`} alt={`${title}`} />
          ) : (
            ""
          )}
          <div>
            <img
              data-id="setting"
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
              alt="additional_menu"
              onClick={() => changeAdditional(id)}
              ref={showMore}
            />
          </div>
          <div>
            {vote_average ? (
              <p>
                {vote_average * 10}
                <sup>%</sup>
              </p>
            ) : (
              "NR"
            )}
          </div>
        </MovieImg>

        <MovieInfo>
          <div>
            <h2>{title}</h2>
            <p>{releaseDate}</p>
          </div>
          <div>
            <p>{overview}</p>
          </div>
        </MovieInfo>
      </MovieCardBox>
    );
  }
);
