import { useContext } from "react";

import { MovieSearchContext } from "../../../../../context";

import "./styles.css";

export const VotesBoard = () => {
  const { setSearchQueries } = useContext(MovieSearchContext);
  const changeVote = (e) => {
    //change vote query
    const { value } = e.target;
    setSearchQueries((prev) => [
      ...prev,
      {
        qeuryRoute: "vote_count.gte",
        queryValue: +value,
      },
    ]);
  };

  return (
    <div className="sort-panel-body">
      <h3>Minimum User Votes</h3>
      <div className="vote-board">
        <span className="vote-count">0</span>
        <span className="vote-count-line" style={{ left: "22%" }}></span>
        <span className="vote-count-line" style={{ left: "40%" }}></span>
        <span className="vote-count-line" style={{ left: "59%" }}></span>
        <span className="vote-count-line" style={{ left: "77%" }}></span>
        <span className="vote-count" style={{ left: "15%" }}>
          100
        </span>
        <span className="vote-count" style={{ left: "35%" }}>
          200
        </span>
        <span className="vote-count" style={{ left: "55%" }}>
          300
        </span>
        <span className="vote-count" style={{ left: "73%" }}>
          400
        </span>

        <span className="vote-count" style={{ left: "95%" }}>
          500
        </span>
        <input
          type="range"
          min="0"
          max="500"
          step={50}
          defaultValue={0}
          className="vote-slider"
          onChange={changeVote}
        />
      </div>
    </div>
  );
};
