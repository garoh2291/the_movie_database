import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.header};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: fixed;
    z-index: 999;
  } ;
`;
