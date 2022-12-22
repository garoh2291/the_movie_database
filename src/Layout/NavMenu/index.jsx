import { useState } from "react";
import { LoginBar } from "./LoginBar";
import { Navbar } from "./Navbar";
import "./styles.css";

export const NavMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const visHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="navigation_menu">
      <div className="nav-toggle" onClick={visHandler}>
        <div className="bar"></div>
      </div>
      <Navbar visible={isVisible} />
      <div className="secondary_logo">
        <a href="/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="secondary_logo"
          />
        </a>
      </div>
      <LoginBar />
    </div>
  );
};
