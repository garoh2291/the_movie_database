import { RUN_TIME } from "../../../../../../data";
import {
  ScoreIndicator,
  ScoreLine,
  SmallValueChangeBtn,
  StyledIndicator,
  StyledScores,
  VoteLabel,
} from "../../ScoreBody/Scores.styled";

export const RuntimeRange = (props) => {
  const { setScore, minTime, maxTime } = props;
  return (
    <StyledScores>
      <VoteLabel left={"-4px"}>0</VoteLabel>
      <VoteLabel left={"23%"}>120</VoteLabel>
      <VoteLabel left={"53%"}>240</VoteLabel>
      <VoteLabel left={"81%"}>360</VoteLabel>

      <StyledIndicator>
        {RUN_TIME.map((time) => (
          <li key={time} data-id={time} title={time} onClick={setScore}></li>
        ))}
      </StyledIndicator>
      <SmallValueChangeBtn
        left={`calc(${minTime}% / 4 - 7.5px ) `}
        title={minTime}
      ></SmallValueChangeBtn>
      <SmallValueChangeBtn
        left={`calc(${maxTime}% / 4 - 10px ) `}
        title={maxTime}
      ></SmallValueChangeBtn>
      <ScoreLine></ScoreLine>
      <ScoreIndicator
        layout={`calc(${maxTime - minTime}% / 4 )`}
        left={`calc(${minTime}% / 4)`}
      ></ScoreIndicator>
    </StyledScores>
  );
};
