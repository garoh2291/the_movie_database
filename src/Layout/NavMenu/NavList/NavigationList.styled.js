import styled from "styled-components";

export const SecondList = styled.ul`
  position: absolute;
  width: 160px;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
  top: 40px;
  list-style: none;
  display: none;
  transition: 0.3s;
  padding: 10px 0;
  box-shadow: 1px 1px 1px 1px #c7c7c7;
  z-index: 999;

  & > li {
    width: 100%;
    padding: 5px 15px;
    transition: 0.3s;
  }

  & > li:hover {
    background-color: #fff8f8;
  }

  & > li > a {
    font-weight: 300;
    text-decoration: none;
    color: #000;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: static;
    width: auto;
    display: block;
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;

    & > li > a {
      padding: 5px 0;
      color: #fff;
      font-weight: 400;
      font-size: 1em;
    }
  }
`;

export const NavigationList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;

  & > li:last-child {
    display: none;
  }

  & > li button {
    color: #fff;
    border: none;
    background-color: transparent;
    padding: 15px;
    font-weight: 600;
    cursor: pointer;
  }

  & > li:hover ${SecondList} {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;

    & > li:last-child {
      height: auto;
      display: block;
      margin-top: 10px;
    }

    & > li:nth-child(4) {
      display: none;
    }

    & > li:last-child > ul > li:last-child {
      margin-top: 10px;
    }

    & > li > button {
      font-weight: 600;
      font-size: 1.3em;
      padding: 10px;
    }
  }
`;

export const NavigationItem = styled.li`
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: 10px;
    height: ${({ layout }) => layout || "30px"};
    overflow: hidden;
  }
`;
