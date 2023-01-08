import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { generateQuery, QUERY_ARR } from "../../helpers/query";
import { setMoviesThunk } from "../../Redux/movieSlice";

import { Dashboard } from "./Dashboard";
import { FilterSection } from "./Filter";

import { MovieWrapper } from "./Movie.styled";

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [queryArray, setQueryArray] = useState(QUERY_ARR);
  const dispatch = useDispatch();

  const getMovieFilter = (filterEntries) => {
    //add new queries or change
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
    //call to API to get movie list
    const generatedQuery = generateQuery(queryArray);
    const query = `${generatedQuery}page=${page}&`;

    dispatch(setMoviesThunk({ query, page }));
  }, [dispatch, page, queryArray]);

  const newItemsHandler = () => {
    //change page number
    setPage((prev) => prev + 1);
  };
  return (
    <MovieWrapper>
      <FilterSection onFilter={getMovieFilter} />
      <Dashboard page={page} onHandler={newItemsHandler} setPage={setPage} />
    </MovieWrapper>
  );
};
