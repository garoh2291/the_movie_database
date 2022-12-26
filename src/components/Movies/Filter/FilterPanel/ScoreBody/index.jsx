import { useContext, useState } from "react";

import { MovieSearchContext } from "../../../../../context";

import "./styles.css";

export const ScoreBody = () => {
  const [minScore, setMinScore] = useState(0);
  const [maxScore, setMaxScore] = useState(10);
  const { setSearchQueries } = useContext(MovieSearchContext);

  const setScore = (e) => {
    const newMaxValue = e.target.getAttribute("data-id");
    if (Math.abs(newMaxValue - minScore) >= Math.abs(newMaxValue - maxScore)) {
      //change max score query
      setMaxScore(newMaxValue);

      setSearchQueries((prev) => [
        ...prev,
        {
          qeuryRoute: "vote_average.lte",
          queryValue: newMaxValue,
        },
      ]);
    } else {
      //change min score query

      setMinScore(newMaxValue);

      setSearchQueries((prev) => [
        ...prev,
        {
          qeuryRoute: "vote_average.gte",
          queryValue: newMaxValue,
        },
      ]);
    }
  };

  return (
    <div className="sort-panel-body">
      <h3>User Score</h3>
      <div className="score-wrap">
        <span className="min-vote-label">0</span>
        <span className="avg-vote-label">5</span>
        <span className="max-vote-label">10</span>

        <ul className="indicator">
          <li data-id={0} onClick={setScore}></li>
          <li data-id={1} onClick={setScore}></li>
          <li data-id={2} onClick={setScore}></li>
          <li data-id={3} onClick={setScore}></li>
          <li data-id={4} onClick={setScore}></li>
          <li data-id={5} onClick={setScore}></li>
          <li data-id={6} onClick={setScore}></li>
          <li data-id={7} onClick={setScore}></li>
          <li data-id={8} onClick={setScore}></li>
          <li data-id={9} onClick={setScore}></li>
          <li data-id={10} onClick={setScore}></li>
        </ul>
        <button
          className="change-value"
          style={{ left: `calc(${minScore}% * 10 - 7.5px ) ` }}
        ></button>
        <button
          className="change-value"
          style={{ left: `calc(${maxScore}% * 10 - 7px ) ` }}
        ></button>
        <div className="score-wrap-indicator"></div>
        <div
          className="score-wrap-indicator active"
          style={{
            width: `calc(${maxScore - minScore}% * 10 )`,
            left: `calc(${minScore}% * 10)`,
          }}
        ></div>
      </div>
    </div>
  );
};
