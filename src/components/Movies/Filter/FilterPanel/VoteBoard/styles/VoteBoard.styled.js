import styled from "styled-components";

export const StyledVoteBoard = styled.div`
  width: 100%;
  height: 30px;
  position: relative;

  & > input {
    margin-top: 5px;
    width: 100%;
  }
`;

export const StyledCount = styled.span`
  position: absolute;
  bottom: -7px;
  color: #c8c8c8;
  left: ${({ left }) => left || ""};
`;

export const StyledCountLine = styled.span`
  position: absolute;
  bottom: 25px;
  width: 1px;
  height: 10px;
  background-color: #929292;
  left: ${({ left }) => left || ""};
`;
