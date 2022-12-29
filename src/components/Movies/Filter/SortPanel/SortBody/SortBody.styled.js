import styled from "styled-components";

export const SortWrapper = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;

  & > span {
    background-color: #e4e7eb;
    border-radius: 4px;
    display: block;
    display: flex;
    align-items: center;
    padding: 5px 15px;
    width: 100%;
    height: 34px;
    font-size: 15px;
    font-weight: 400;
    position: relative;
  }

  & > div {
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
  }

  & > div > span {
    display: block;
    padding: 5px 15px;
    width: 100%;
    font-size: 14px;
    color: rgb(24, 23, 23);
  }

  & > div > span:hover {
    background-color: #e4e7eb;
  }
`;
