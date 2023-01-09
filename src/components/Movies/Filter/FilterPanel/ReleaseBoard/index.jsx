import { useContext } from "react";

import { MovieSearchContext } from "../../../../../context";
import { FilterBody } from "../../Filter.styled";

import { StyledRelease } from "./Release.styled";

export const RealeaseBoard = () => {
  const { setSearchQueries } = useContext(MovieSearchContext);

  const setStartDate = (e) => {
    // change start date of release
    const {
      target: { value },
    } = e;

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
    const {
      target: { value },
    } = e;
    setSearchQueries((prev) => [
      ...prev,
      {
        qeuryRoute: "release_date.lte",
        queryValue: value,
      },
    ]);
  };
  return (
    <FilterBody>
      <h3>Release Dates </h3>
      <StyledRelease>
        <div>
          <span>from</span>
          <input
            type="date"
            name="start"
            id="start-date"
            onChange={setStartDate}
            defaultValue={""}
          />
        </div>
        <div>
          <span>to</span>
          <input
            type="date"
            name="end"
            id="end-date"
            defaultValue={"2023-06-26"}
            onChange={setEndDate}
          />
        </div>
      </StyledRelease>
    </FilterBody>
  );
};
