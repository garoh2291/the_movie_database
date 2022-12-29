import styled from "styled-components";

export const StyledRelease = styled.div`
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    color: #7c7a7a;
  }

  & > div > input {
    height: 30px;
    padding: 5px;
  }
`;
