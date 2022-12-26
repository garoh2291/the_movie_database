import { useContext, useState } from "react";

import { MovieSearchContext } from "../../../../../context";

import { RuntimeRange } from "./RuntimeRange";

export const RuntimeBody = () => {
  const [minTime, setMinTime] = useState(0);
  const [maxTime, setMaxTime] = useState(400);
  const { setSearchQueries } = useContext(MovieSearchContext);

  const setScore = (e) => {
    const newMaxValue = e.target.getAttribute("data-id");
    console.log(newMaxValue);
    if (Math.abs(newMaxValue - minTime) >= Math.abs(newMaxValue - maxTime)) {
      //change max score query
      setMaxTime(newMaxValue);

      setSearchQueries((prev) => [
        ...prev,
        {
          qeuryRoute: "with_runtime.lte",
          queryValue: newMaxValue,
        },
      ]);
    } else {
      //change min score query

      setMinTime(newMaxValue);

      setSearchQueries((prev) => [
        ...prev,
        {
          qeuryRoute: "with_runtime.gte",
          queryValue: newMaxValue,
        },
      ]);
    }
  };
  return (
    <div className="sort-panel-body">
      <h3>Runtime</h3>
      <RuntimeRange setScore={setScore} minTime={minTime} maxTime={maxTime} />
    </div>
  );
};
