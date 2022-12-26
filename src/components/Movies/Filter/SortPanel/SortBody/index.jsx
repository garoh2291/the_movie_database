import { useState } from "react";
import { useContext } from "react";

import { MovieSearchContext } from "../../../../../context";

import { SORT_ITEMS } from "../../../../../data";

import "./styles.css";

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
    <div className="sort-panel-body">
      <h3>Sort Results By</h3>

      <div className="sort-wrapper">
        <span
          data-id={sortQuery.query}
          onClick={() => setIsSortOpen((prev) => !prev)}
        >
          {sortQuery.label}
        </span>
        <div
          className={`sort-select-items ${!isSortOpen ? "non-visible" : ""}`}
        >
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
      </div>
    </div>
  );
};
