import styled from "styled-components";

export const StyledRadioBtn = styled.label`
  display: flex;
  margin-bottom: 10px;

  & > label {
    margin-left: 4px;
    line-height: 17px;
  }

  & > input {
    border-color: #adb5bd;
    color: transparent;
    background-color: #fff;
    border-radius: 0.25rem;
    width: 1rem;
    height: 1rem;
    line-height: initial;
    border-width: 1px;
    border-style: solid;
  }
`;

export const StyledCategories = styled.div`
  width: 100%;
  display: ${({ layout }) => layout || "none"};
`;
