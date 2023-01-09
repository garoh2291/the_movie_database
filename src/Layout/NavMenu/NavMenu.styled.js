import styled from "styled-components";

export const NavMenuStyled = styled.div`
  padding: 0 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 20px;
  } ;
`;

export const NavToggle = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    & > div {
      position: relative;
      width: 25px;
      height: 3px;
      background-color: #fff;
      transition: all 0.45s ease-in-out;
    }

    & > div::before,
    & > div::after {
      content: "";
      position: absolute;
      height: 3px;
      background-color: #fff;
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
    }

    & > div::before {
      width: 25px;
      transform: translateY(-8px);
      right: 0;
    }

    & > div::after {
      width: 25px;
      transform: translateY(8px);
    }
  } ;
`;

export const SecondaryLogo = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    width: 55px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > a {
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
