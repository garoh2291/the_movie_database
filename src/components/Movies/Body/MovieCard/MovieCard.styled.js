import styled from "styled-components";

export const MovieCardBox = styled.div`
  width: 180px;
  min-width: 150px;
  min-height: 326px;
  cursor: pointer;
  position: relative;
  margin-top: 30px;
  margin-left: 5px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  & > div:last-child {
    width: 100%;
    padding: 26px 10px 12px 10px;
  }

  & > div:last-child > h2 {
    font-size: 1em;
  }

  & > div:last-child > p {
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1110px) {
    width: 150px;
  }

  @media (max-width: 1010px) {
    width: 180px;
  }
`;

export const StyledCover = styled.div`
  visibility: ${({ layout }) => layout || "hidden"};
  transition: 0.2s;
  z-index: 500;
  border-radius: 8px;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
`;

export const MovieSetting = styled.div`
  display: ${({ dp }) => dp || "none"};
  position: absolute;
  background-color: #fff;
  width: 271px;
  top: 30px;
  left: -10px;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 8px;
  z-index: 999;

  & > div {
    padding: 4px 0;
  }

  & > div > p {
    color: #000;
    font-weight: 600;
    padding: 6px 20px;
    font-size: 0.9em;
  }

  & > div > a {
    display: flex;
    align-items: center;
    padding: 6px 20px;
    font-weight: 600;
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }

  & > div > a > i {
    margin-left: 5px;
    color: rgba(var(--tmdbDarkBlue), 1);
  }

  & > div > a:hover {
    background-color: rgba(var(--tmdbDarkBlue), 1);
    color: #fff;
  }

  & > div:last-child > a {
    justify-content: space-between;
  }
`;

export const MovieImg = styled.div`
  position: relative;
  width: 100%;
  min-height: 225px;
  height: 225px;
  border-radius: 8px 8px 0px 0px;
  background-color: #dbdbdb;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg");
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  & > div:nth-child(2) {
    position: absolute;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 8px;
    right: 8px;
    opacity: 0.6;
    cursor: pointer;
    z-index: 222;
  }

  & > div:last-child {
    position: absolute;
    bottom: -19px;
    left: 10px;
    width: 38px;
    height: 38px;
    padding: 2px;
    background-color: #081c22;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.9em;
    font-weight: 600;
    border: ${({ bd }) => bd || ""};

    sup {
      font-size: 0.5em;
    }
  }

  & > div:first-child:hover {
    opacity: 1;
    filter: brightness(0) saturate(100%) invert(53%) sepia(33%) saturate(3054%)
      hue-rotate(156deg) brightness(98%) contrast(99%);
  }
`;
