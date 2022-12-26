import React from "react";
import { useContext } from "react";
import { MovieSearchContext } from "../../../../context";
import "./styles.css";

export const FilterButton = (props) => {
  const { searchQueries } = useContext(MovieSearchContext);
  const { onFilter } = props;

  const sendQueries = () => {
    //push queries from searchQueries to searchQuery
    searchQueries.forEach((searchQuery) => onFilter(searchQuery));
  };
  return (
    <div className="filter-button-wrapper">
      <button
        onClick={sendQueries}
        disabled={!searchQueries.length}
        className={!searchQueries.length ? "disabled-search-button" : ""}
      >
        Search
      </button>
    </div>
  );
};
