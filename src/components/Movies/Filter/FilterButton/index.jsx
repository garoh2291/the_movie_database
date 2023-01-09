import React from "react";
import { useContext } from "react";
import { MovieSearchContext } from "../../../../context";
import { FilterBtn } from "../Filter.styled";

export const FilterButton = (props) => {
  const { searchQueries } = useContext(MovieSearchContext);
  const { onFilter } = props;

  const sendQueries = () => {
    //push queries from searchQueries to searchQuery
    searchQueries.forEach((searchQuery) => onFilter(searchQuery));
  };
  return (
    <FilterBtn
      clr={!searchQueries.length && "rgba(0, 0, 0, 0.5) !important;"}
      bgColor={!searchQueries.length && "rgba(228, 228, 228, 0.7) !important"}
      bFilter={!searchQueries.length && "blur(10px)"}
    >
      <button onClick={sendQueries} disabled={!searchQueries.length}>
        Search
      </button>
    </FilterBtn>
  );
};
