import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWindowDimensions } from "../../../helpers";
import { MovieCard } from "./MovieCard";
import { CardMobile } from "./MovieCardMobile";

import "./styles.css";

export const Body = (props) => {
  const { movies } = useSelector((state) => state.movies);
  const { onHandler, page, setPage } = props;
  const { width } = getWindowDimensions();
  console.log(width);

  useEffect(() => {
    window.onscroll = function (e) {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 > scrollHeight && page > 1) {
        setPage((prev) => prev + 1);
      }
    };
  }, [page, setPage]);

  return (
    <div className="movie_body_wrapper">
      <div className={`movies_body ${width > 980 ? "" : "no_padding"}`}>
        {width > 980
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : movies.map((movie) => <CardMobile key={movie.id} movie={movie} />)}
      </div>
      <div className={`body_button_wrapper ${width > 980 ? "" : "no_padding"}`}>
        {page === 1 && (
          <button onClick={onHandler}>
            <span>Load More</span>
          </button>
        )}
      </div>
    </div>
  );
};
