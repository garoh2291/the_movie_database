import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-image: radial-gradient(
    at 30% top,
    #031d33 0%,
    rgba(var(--tmdbDarkBlue), 1) 70%
  );
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FooterContent = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  & > nav {
    padding: 80px 0;
    display: flex;
    justify-content: space-between;
  }

  & > nav > div {
    margin-left: 40px;
  }

  & > nav > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -15px;
  }

  & > nav > div:first-child > img {
    width: 130px;
    height: 94px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;

    & > nav {
      flex-direction: column;
      justify-content: flex-start;
      padding: 20px;
    }

    & > nav > div {
      margin-left: 10px;
      margin-top: 30px;
    }

    & > nav > div:first-child {
      padding-bottom: 20px;
    }
    & > nav > div:first-child > img {
      display: none;
    }
  }
`;

export const CommunityBtn = styled.button`
  border-color: #fff;
  background-color: #fff;
  color: rgba(var(--tmdbLightBlue), 1);
  font-size: 1em;
  font-weight: bold;
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  text-transform: uppercase;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 8px 16px;
  margin-top: 30px;
  white-space: nowrap;
  text-overflow: hidden;
`;

export const StyledFooterNav = styled.ul`
  list-style: none;

  & > li > a {
    color: #fff;
    text-decoration: none;
    line-height: 1.6em;
  }
`;
