import styled from "styled-components";

export const StyledKeywords = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  & > input {
    margin: 0 auto;
    width: 100%;
    border: 1px solid #c7c7c7;
    border-radius: 5px;
    padding-left: 10px;
    height: 35px;
  }

  & > div:last-child {
    margin-top: 10px;
    display: ${({ layout }) => layout || "flex"};
    flex-wrap: wrap;
  }

  & > div:last-child > span {
    padding: 4px;
    border-radius: 5px;
    background-color: #c7c7c7;
    margin-top: 5px;
    margin-left: 10px;
  }
`;

export const StyledDropdown = styled.div`
  padding: 5px 0;
  position: absolute;
  background-color: #fff;
  top: 34px;
  left: 0;
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  display: ${({ layout }) => layout || "flex"};
  align-items: center;
  flex-direction: column;
  border: 1px solid #e4e7eb;
  border-radius: 4px;
  padding: 5px 15px;
  z-index: 111;

  & > span {
    display: block;
    padding: 5px 15px;
    width: 100%;
    font-size: 14px;
    color: rgb(24, 23, 23);
  }

  & > span:hover {
    background-color: #e4e7eb;
  }
`;
