import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getWindowDimensions } from "../../../helpers";

import { MovieCard } from "./MovieCard";
import { CardMobile } from "./MovieCardMobile";

import "./styles.css";

export const Body = (props) => {
  const { movies, status } = useSelector((state) => state.movies);
  const { onHandler, page, setPage } = props;
  const { width } = getWindowDimensions();

  useEffect(() => {
    //fetch new movies vie scrolling
    window.onscroll = function (e) {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 > scrollHeight && page > 1) {
        setPage((prev) => prev + 1);
      }
    };
  }, [page, setPage]);

  if (status === "resolved" && !movies.length) {
    return (
      <div className="movie-body-wrapper">
        <h2>No items were found that match your query.</h2>
      </div>
    );
  }

  return (
    <div className="movie-body-wrapper">
      <div className={`movies-body ${width > 980 ? "" : "no-padding"}`}>
        {width > 980
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : movies.map((movie) => <CardMobile key={movie.id} movie={movie} />)}
      </div>
      <div className={`body-button-wrapper ${width > 980 ? "" : "no-padding"}`}>
        {page === 1 && movies.length > 18 && (
          <button onClick={onHandler}>
            <span>Load More</span>
          </button>
        )}
      </div>
    </div>
  );
};
