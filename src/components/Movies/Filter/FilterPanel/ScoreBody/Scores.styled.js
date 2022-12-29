import styled from "styled-components";

export const StyledScores = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  position: relative;
`;

export const VoteLabel = styled.span`
  position: absolute;
  color: #a3a3a3;
  top: 8px;
  left: ${({ left }) => left || ""};
`;

export const StyledIndicator = styled.ul`
  width: 100%;
  height: 10px;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: -3px;
  list-style: none;
  z-index: 10;

  & > li {
    width: 6px;
    height: 15px;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }

  & > li::after {
    position: absolute;
    content: "";
    height: 5px;
    width: 1px;
    background-color: #c7cacc;
    top: -5px;
    left: 7%;
  }

  & > li[data-id="120"]::after {
    top: -10px;
    height: 10px;
  }

  & > li[data-id="240"]::after {
    top: -10px;
    height: 10px;
  }

  & > li[data-id="360"]::after {
    top: -10px;
    height: 10px;
  }

  & > li:last-child::after {
    left: 50%;
  }
`;

export const ValueChangeBtn = styled.button`
  top: -5px;
  position: absolute;
  border: none;
  border-radius: 50%;
  z-index: 11;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background-color: rgba(var(--accountLightBlue), 1);
  left: ${({ left }) => left || ""};
`;

export const SmallValueChangeBtn = styled.button`
  top: -3px;
  position: absolute;
  border: none;
  border-radius: 50%;
  z-index: 11;
  width: 10px;
  height: 10px;
  cursor: pointer;
  background-color: rgba(var(--accountLightBlue), 1);
  left: ${({ left }) => left || ""};
`;

export const ScoreLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: #e9ecef;
  border-radius: 2px;
  position: absolute;
  top: 0;
`;

export const ScoreIndicator = styled.div`
  width: ${({ layout }) => layout || "100%"};
  left: ${({ left }) => left || ""};
  height: 5px;
  background-color: rgba(var(--accountLightBlue), 1);
  z-index: 5;
  border-radius: 2px;
  position: absolute;
  top: 0;
`;
