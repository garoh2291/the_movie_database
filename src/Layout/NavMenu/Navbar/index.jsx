import { Link } from "react-router-dom";
import { NavList } from "../NavList";
import "./styles.css";

export const Navbar = (props) => {
  const { visible } = props;
  return (
    <div className={`navigation_bar ${visible ? "open" : ""}`}>
      <Link to={"sd"} className="logo">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="logo"
        />
      </Link>
      <NavList />
    </div>
  );
};
