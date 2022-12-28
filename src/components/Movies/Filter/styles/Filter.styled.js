import styled from "styled-components";

export const StyledFilter = styled.div`
  width: 260px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const FilterBtn = styled.div`
  width: 100%;
  height: 44px;
  margin-top: 20px;

  & > button {
    border-radius: 20px;
    border: none;
    width: 100%;
    height: 100%;
    color: ${({ clr }) => clr || "#fff"};
    font-size: 1.2em;
    line-height: 1;
    font-weight: 600;
    background-color: ${({ bgColor }) =>
      bgColor || "rgba(var(--accountLightBlue), 1)"};
    cursor: pointer;
    backdrop-filter: ${({ bFilter }) => bFilter || "none"};
  }
`;

export const StyledHead = styled.div`
  width: 100%;
  height: 50px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
`;

export const Panel = styled.div`
  width: 100%;
  min-width: 100%;
  height: ${({ layout }) => layout || "50px"};
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 8px;
  overflow: ${({ visible }) => visible || "hidden"};

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const FilterBody = styled.div`
  border-top: 1px solid #eee;
  padding: 14px 16px 16px 16px;

  & > h3 {
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 10px;
  }
`;
