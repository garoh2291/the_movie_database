import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginList } from "./LoginList";
import "./styles.css";

export const LoginBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onChangeHandler = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="login-section">
      <LoginList />
      <button className="auth-btn" onClick={onChangeHandler}>
        <img
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-7de7dfcae838579a18f4eebc5b8847230d154718e481c5cd01c477cfcbc85993.svg"
          alt="login"
        />
        <div className={`auth-content-mobile ${isVisible ? "visible" : ""}`}>
          <div className="setting">
            <Link to={""}>Login</Link>
          </div>
          <div className="setting">
            <Link to={""}>Sign Up</Link>
          </div>
        </div>
      </button>
      <button className="search-btn">
        <img
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
          alt="search-img"
        />
      </button>
    </div>
  );
};
