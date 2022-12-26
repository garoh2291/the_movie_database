import { useContext } from "react";

import { MovieSearchContext } from "../../../../../context";

import "./styles.css";

export const RealeaseBoard = () => {
  const { setSearchQueries } = useContext(MovieSearchContext);

  const setStartDate = (e) => {
    // change start date of release
    const { value } = e.target;
    setSearchQueries((prev) => [
      ...prev,
      {
        qeuryRoute: "release_date.gte",
        queryValue: value,
      },
    ]);
  };

  const setEndDate = (e) => {
    // change end date of release
    const { value } = e.target;
    setSearchQueries((prev) => [
      ...prev,
      {
        qeuryRoute: "release_date.lte",
        queryValue: value,
      },
    ]);
  };
  return (
    <div className="sort-panel-body">
      <h3>Release Dates </h3>
      <div className="release-wrap">
        <div className="start-date">
          <span>from</span>
          <input
            type="date"
            name="start"
            id="start-date"
            onChange={setStartDate}
            defaultValue={""}
          />
        </div>
        <div className="start-date">
          <span>to</span>
          <input
            type="date"
            name="end"
            id="end-date"
            defaultValue={"2023-06-26"}
            onChange={setEndDate}
          />
        </div>
      </div>
    </div>
  );
};
