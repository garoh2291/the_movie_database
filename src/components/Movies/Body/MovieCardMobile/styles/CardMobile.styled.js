import styled from "styled-components";

export const MobileCardStyled = styled.div`
  width: 100%;
  height: 143px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #fff;
  margin-top: 20px;
  border-radius: 6px;
  display: flex;

  & > div:first-child {
    width: 95px;
    height: 100%;
    border-radius: 3px 0px 0px 3px;
    background-color: #dbdbdb;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg");
  }

  & > div:first-child > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px 0px 0px 3px;
  }
`;

export const MobileInfo = styled.div`
  width: calc(100% - 95px);
  height: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div:first-child {
    width: 100%;
  }

  & > div:first-child > h2 {
    font-size: 1em;
  }

  & > div:first-child > p {
    font-size: 0.9em;
    white-space: nowrap;
    color: #999;
  }

  & > div:last-child {
    width: 100%;
    margin-top: 20px;
    max-height: 3.2em;
    height: auto;
  }

  & > div:last-child > p {
    font-size: 0.8.9emem;
    line-height: 1.2em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
