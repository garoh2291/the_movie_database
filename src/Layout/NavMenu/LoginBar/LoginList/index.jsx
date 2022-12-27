import {
  LangButton,
  LoginListStyled,
  NewButton,
} from "./styles/LoginList.styled";

export const LoginList = () => {
  return (
    <nav>
      <LoginListStyled>
        <li>
          <NewButton>
            <i className="bx bx-plus-medical"></i>
          </NewButton>
        </li>
        <li>
          <LangButton>EN</LangButton>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Join TMDB</a>
        </li>
      </LoginListStyled>
    </nav>
  );
};
