import { NAVIGATION_LINKS } from "../../../data";
import { NavItem } from "./NavItem";
import { SecondaryList } from "./SecondaryList";
import "./styles.css";

export const NavList = () => {
  const { movies, shows, people, more, additional } = NAVIGATION_LINKS;
  return (
    <nav>
      <ul className="navigation_list">
        <NavItem category={movies} />
        <NavItem category={shows} />
        <NavItem category={people} />

        <li>
          <button>{more.label}</button>
          <SecondaryList list={more.list} />
        </li>
        <li className="nav_additional_menu">
          <SecondaryList list={additional.list} />
        </li>
      </ul>
    </nav>
  );
};
