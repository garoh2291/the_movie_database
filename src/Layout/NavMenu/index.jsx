import { useState } from "react";
import { ASSETS_URL } from "../../data";
import { LoginBar } from "./LoginBar";
import { Navbar } from "./Navbar";
import { NavMenuStyled, NavToggle, SecondaryLogo } from "./NavMenu.styled";

export const NavMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const visHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <NavMenuStyled>
      <NavToggle onClick={visHandler}>
        <div></div>
      </NavToggle>
      <Navbar visible={isVisible} />
      <SecondaryLogo>
        <a href="/">
          <img
            src={`${ASSETS_URL}logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`}
            alt="secondary-logo"
          />
        </a>
      </SecondaryLogo>{" "}
      <LoginBar />
    </NavMenuStyled>
  );
};
