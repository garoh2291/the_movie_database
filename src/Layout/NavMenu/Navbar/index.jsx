import { Link } from "react-router-dom";
import { ASSETS_URL } from "../../../data";
import { NavList } from "../NavList";
import { NavigationBar } from "./NavigationBar.styled";

export const Navbar = (props) => {
  const { visible } = props;
  return (
    <NavigationBar left={visible && "0"} layout={visible && "block"}>
      <Link to={""}>
        <img
          src={`${ASSETS_URL}logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`}
          alt="logo"
        />
      </Link>
      <NavList />
    </NavigationBar>
  );
};
