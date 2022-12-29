import { useContext } from "react";

import { MovieSearchContext } from "../../../../../context";
import { FilterBody } from "../../Filter.styled";

import {
  StyledCount,
  StyledCountLine,
  StyledVoteBoard,
} from "./VoteBoard.styled";

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
    <FilterBody>
      <h3>Minimum User Votes</h3>
      <StyledVoteBoard>
        <StyledCount>0</StyledCount>
        <StyledCountLine left={"22%"}></StyledCountLine>
        <StyledCountLine left={"40%"}></StyledCountLine>
        <StyledCountLine left={"59%"}></StyledCountLine>
        <StyledCountLine left={"77%"}></StyledCountLine>
        <StyledCount left={"15%"}>100</StyledCount>
        <StyledCount left={"35%"}>200</StyledCount>
        <StyledCount left={"55%"}>300</StyledCount>
        <StyledCount left={"73%"}>400</StyledCount>
        <StyledCount left={"95%"}>500</StyledCount>
        <input
          type="range"
          min="0"
          max="500"
          step={50}
          defaultValue={0}
          onChange={changeVote}
        />
      </StyledVoteBoard>
    </FilterBody>
  );
};
