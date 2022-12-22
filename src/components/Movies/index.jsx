import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../data";
import { setMoviesThunk } from "../../Redux/movieSlice";
import { Body } from "./Body";
import { FilterSection } from "./Filter";
import "./styles.css";
export const Movies = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFetching) {
      dispatch(
        setMoviesThunk(
          `api_key=${API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc&include_adult=false`
        )
      );
      setIsFetching(false);
      setPage((prev) => prev + 1);
    }
  }, [isFetching, dispatch, page]);

  const newItemsHandler = () => {
    setIsFetching(true);
  };
  return (
    <div className="movies_wrapper">
      <FilterSection />
      <Body
        page={page}
        onHandler={newItemsHandler}
        setIsFetching={setIsFetching}
      />
    </div>
  );
};
