import { useContext, useState } from "react";

import { MovieSearchContext } from "../../../../../context";
import { FilterBody } from "../../Filter.styled";

import {
  ScoreIndicator,
  ScoreLine,
  StyledIndicator,
  StyledScores,
  ValueChangeBtn,
  VoteLabel,
} from "./Scores.styled";
import { SCORES } from "../../../../../data";

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
    <FilterBody>
      <h3>User Score</h3>
      <StyledScores>
        <VoteLabel left={"-4px"}>0</VoteLabel>
        <VoteLabel left={"47%"}>5</VoteLabel>
        <VoteLabel left={"calc(100% - 8px)"}>10</VoteLabel>

        <StyledIndicator>
          {SCORES.map((score) => (
            <li
              key={score}
              data-id={score}
              title={score}
              onClick={setScore}
            ></li>
          ))}
        </StyledIndicator>
        <ValueChangeBtn
          left={`calc(${minScore}% * 10 - 7.5px ) `}
          title={minScore}
        ></ValueChangeBtn>
        <ValueChangeBtn
          left={`calc(${maxScore}% * 10 - 7px ) `}
          title={maxScore}
        ></ValueChangeBtn>
        <ScoreLine></ScoreLine>
        <ScoreIndicator
          layout={`calc(${maxScore - minScore}% * 10 )`}
          left={`calc(${minScore}% * 10)`}
        ></ScoreIndicator>
      </StyledScores>
    </FilterBody>
  );
};
