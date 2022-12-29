import styled from "styled-components";

export const ShowRadioBtn = styled.label`
  display: flex;
  margin-bottom: 10px;

  & > label {
    margin-left: 4px;
    line-height: 17px;
  }

  & > input {
    border-color: rgba(var(--accountLightBlue), 1);
    color: #fff;
    width: 1rem;
    height: 1rem;
    border-width: 1px;
    border-style: solid;
    outline: 0;
    cursor: pointer;
  }
`;
