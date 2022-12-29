import styled from "styled-components";

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    height: 20px;
    width: 154px;
    display: block;
  }

  & > nav {
    padding-left: 15px;
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: fixed;
    height: calc(100vh - 64px);
    width: 90%;
    top: 64px;
    left: ${({ left }) => left || "-91%"};
    transition: ease 0.3s;
    z-index: 999;
    background: rgba(var(--tmdbDarkBlue), 0.9);
    backdrop-filter: blur(20px);
    padding: 10px;
    display: ${({ layout }) => layout || "flex"};

    & > nav {
      padding-left: 0;
    }

    & > a {
      display: none;
    }
  } ;
`;
