import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MovieBody } from "./Dashboard.styled";

export const Dashboard = (props) => {
  const { movies, status } = useSelector((state) => state.movies);
  const { onHandler, page, setPage } = props;
  const dashboardRef = useRef(null);

  useEffect(() => {
    // fetch new movies vie scrolling

    function handleScroll(e) {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 > scrollHeight && page > 1) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, setPage]);

  if (status === "resolved" && !movies.length) {
    return (
      <MovieBody>
        <h2>No items were found that match your query.</h2>
      </MovieBody>
    );
  }

  return (
    <MovieBody ref={dashboardRef}>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div>
        {page === 1 && movies.length > 18 && (
          <button onClick={onHandler}>
            <span>Load More</span>
          </button>
        )}
      </div>
    </MovieBody>
  );
};
