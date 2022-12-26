import { useState } from "react";
import { MovieSearchContext } from "..";

export const MovieSearchContextProvider = ({ children }) => {
  const [searchQueries, setSearchQueries] = useState([]);

  return (
    <MovieSearchContext.Provider value={{ searchQueries, setSearchQueries }}>
      {children}
    </MovieSearchContext.Provider>
  );
};
