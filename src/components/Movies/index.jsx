import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { generateQuery, QUERY_ARR } from "../../helpers/query";
import { setMoviesThunk } from "../../Redux/movieSlice";
import { Body } from "./Body";
import { FilterSection } from "./Filter";
import "./styles.css";
export const Movies = () => {
  const [page, setPage] = useState(1);
  const [queryArray, setQueryArray] = useState(QUERY_ARR);
  const dispatch = useDispatch();

  const getMovieFilter = (filterEntries) => {
    const newArr = queryArray.filter((item) => {
      return item.qeuryRoute === filterEntries.qeuryRoute;
    });
    if (newArr.length === 0) {
      setQueryArray((prev) => {
        return [...prev, filterEntries];
      });
    } else {
      setQueryArray((prev) => {
        return prev.map((item) => {
          if (item.qeuryRoute === filterEntries.qeuryRoute) {
            return filterEntries;
          }
          return item;
        });
      });
    }
    setPage(1);
  };

  useEffect(() => {
    const generatedQuery = generateQuery(queryArray);
    const query = `${generatedQuery}page=${page}&`;

    dispatch(setMoviesThunk({ query, page }));
  }, [dispatch, page, queryArray]);

  const newItemsHandler = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="movies_wrapper">
      <FilterSection onFilter={getMovieFilter} />
      <Body page={page} onHandler={newItemsHandler} setPage={setPage} />
    </div>
  );
};
