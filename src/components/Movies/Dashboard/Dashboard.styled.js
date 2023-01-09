import styled from "styled-components";

export const MovieBody = styled.div`
  width: calc(100% - 260px);
  padding-left: 30px;

  & > h2 {
    margin-top: 30px;
    font-weight: 400;
  }

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & > div:last-child {
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div:last-child > button {
    background-color: rgba(var(--accountLightBlue), 1);
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    color: #fff;
  }

  & > div:last-child > button:hover {
    color: #0a1526;
  }

  & > div:last-child > button > span {
    font-size: 1.5em;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding-left: 0;
  }
`;
