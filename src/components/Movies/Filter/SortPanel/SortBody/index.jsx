import { useState } from "react";
import { useContext } from "react";

import { MovieSearchContext } from "../../../../../context";

import { SORT_ITEMS } from "../../../../../data";
import { FilterBody } from "../../styles/Filter.styled";

import { SortWrapper } from "./styles/SortBody.styled";

export const SortBody = () => {
  const { setSearchQueries } = useContext(MovieSearchContext);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortQuery, setSortQuery] = useState({
    query: SORT_ITEMS[0].query,
    label: SORT_ITEMS[0].label,
  });

  const setNewQuery = (newQuery) => {
    //change sort method
    setSortQuery(newQuery);
    setSearchQueries((prev) => [
      ...prev,
      {
        qeuryRoute: "sort_by",
        queryValue: newQuery.query,
      },
    ]);
    setIsSortOpen(false);
  };

  return (
    <FilterBody>
      <h3>Sort Results By</h3>

      <SortWrapper layout={!isSortOpen && "none"}>
        <span
          data-id={sortQuery.query}
          onClick={() => setIsSortOpen((prev) => !prev)}
        >
          {sortQuery.label}
        </span>
        <div>
          {SORT_ITEMS.map((item, index) => (
            <span
              data-id={item.query}
              key={index}
              onClick={() => setNewQuery(item)}
            >
              {item.label}
            </span>
          ))}
        </div>
      </SortWrapper>
    </FilterBody>
  );
};
