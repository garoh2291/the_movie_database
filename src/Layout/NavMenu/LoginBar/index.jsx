import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../../context";
import { ASSETS_URL } from "../../../data";
import { LoginList } from "./LoginList";
import {
  AuthBtn,
  LoginSection,
  MobileAuth,
  SearchBtn,
} from "./LoginSection.styled";

export const LoginBar = () => {
  const { isAuthVisible, onChangeHandler, setIsAuthVisible } =
    useContext(MenuContext);
  const authRef = useRef(null);

  useEffect(() => {
    //closing opened autorization menu , when clicked outside
    function handleClickOutside(e) {
      if (authRef.current && !authRef.current.contains(e.target)) {
        setIsAuthVisible("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [authRef, setIsAuthVisible]);

  return (
    <LoginSection>
      <LoginList />
      <AuthBtn onClick={onChangeHandler}>
        <img
          src={`${ASSETS_URL}glyphicons/basic/glyphicons-basic-4-user-7de7dfcae838579a18f4eebc5b8847230d154718e481c5cd01c477cfcbc85993.svg`}
          alt="login"
          data-id="auth"
        />
        <MobileAuth layout={isAuthVisible && "block"} ref={authRef}>
          <div>
            <Link to={"sdd"}>Login</Link>
          </div>
          <div>
            <Link to={""}>Sign Up</Link>
          </div>
        </MobileAuth>
      </AuthBtn>
      <SearchBtn>
        <img
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
          alt="search-img"
        />
      </SearchBtn>
    </LoginSection>
  );
};
