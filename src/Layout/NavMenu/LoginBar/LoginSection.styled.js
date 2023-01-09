import styled from "styled-components";

export const LoginSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & > nav {
      display: none;
    }
  }
`;

export const AuthBtn = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  filter: invert(1);
  cursor: pointer;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  width: 29px;
  height: 29px;
  background-color: transparent;
  cursor: pointer;
`;

export const MobileAuth = styled.div`
  display: ${({ layout }) => layout || "none"};
  position: absolute;
  top: 35px;
  left: -100px;
  width: 180px;
  filter: invert(1);
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid rgba(33, 37, 41, 0.15);

  & > div {
    padding: 4px 0;
  }

  & > div > a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }

  & > div:first-child {
    position: relative;
    border-bottom: 1px solid rgba(33, 37, 41, 0.15);
  }

  & > div:first-child::after {
    content: "";
    position: absolute;
    left: 106px;
    top: -5px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 5px solid #fff;
  }
`;
