import styled from "styled-components";

export const MovieSection = styled.div`
  padding: 30px 40px;

  & > div > h2 {
    font-size: 1.6em;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
