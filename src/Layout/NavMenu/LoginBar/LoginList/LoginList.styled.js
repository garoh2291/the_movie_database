import styled from "styled-components";

export const NewButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  & > i {
    color: #fff;
    font-size: 1.4em;
  }
`;

export const LangButton = styled.button`
  background-color: transparent;
  padding: 6px 4px;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
`;

export const LoginListStyled = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  display: flex;
  align-items: center;

  & > li {
    padding: 15px;
  }

  & > li > a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }
`;
