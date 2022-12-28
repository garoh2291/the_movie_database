import {
  ScoreIndicator,
  ScoreLine,
  SmallValueChangeBtn,
  StyledIndicator,
  StyledScores,
  VoteLabel,
} from "../../ScoreBody/styles/Scores.styled";

export const RuntimeRange = (props) => {
  const { setScore, minTime, maxTime } = props;
  return (
    <StyledScores>
      <VoteLabel left={"-4px"}>0</VoteLabel>
      <VoteLabel left={"23%"}>120</VoteLabel>
      <VoteLabel left={"53%"}>240</VoteLabel>
      <VoteLabel left={"81%"}>360</VoteLabel>

      <StyledIndicator>
        <li data-id={0} title="0" onClick={setScore}></li>
        <li data-id={15} title="15" onClick={setScore}></li>
        <li data-id={30} title="30" onClick={setScore}></li>
        <li data-id={45} title="45  " onClick={setScore}></li>
        <li data-id={60} title="60" onClick={setScore}></li>
        <li data-id={75} title="75" onClick={setScore}></li>
        <li data-id={90} title="90" onClick={setScore}></li>
        <li data-id={105} title="105" onClick={setScore}></li>
        <li data-id={120} title="120" onClick={setScore}></li>
        <li data-id={135} title="135" onClick={setScore}></li>
        <li data-id={150} title="150" onClick={setScore}></li>
        <li data-id={165} title="165" onClick={setScore}></li>
        <li data-id={180} title="180" onClick={setScore}></li>
        <li data-id={195} title="195" onClick={setScore}></li>
        <li data-id={210} title="210" onClick={setScore}></li>
        <li data-id={225} title="225" onClick={setScore}></li>
        <li data-id={240} title="240" onClick={setScore}></li>
        <li data-id={255} title="255" onClick={setScore}></li>
        <li data-id={270} title="270" onClick={setScore}></li>
        <li data-id={285} title="285" onClick={setScore}></li>
        <li data-id={300} title="300" onClick={setScore}></li>
        <li data-id={315} title="315" onClick={setScore}></li>
        <li data-id={330} title="330" onClick={setScore}></li>
        <li data-id={345} title="345" onClick={setScore}></li>
        <li data-id={360} title="360" onClick={setScore}></li>
        <li data-id={375} title="375" onClick={setScore}></li>
        <li data-id={390} title="390" onClick={setScore}></li>
        <li data-id={400} title="400" onClick={setScore}></li>
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
