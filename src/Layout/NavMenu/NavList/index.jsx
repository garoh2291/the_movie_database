import { NAVIGATION_LINKS } from "../../../data";
import { NavItem } from "./NavItem";
import { SecondaryList } from "./SecondaryList";
import { NavigationList } from "./NavigationList.styled";

export const NavList = () => {
  const { movies, shows, people, more, additional } = NAVIGATION_LINKS;
  return (
    <nav>
      <NavigationList>
        <NavItem category={movies} />
        <NavItem category={shows} />
        <NavItem category={people} />

        <li>
          <button>{more.label}</button>
          <SecondaryList list={more.list} />
        </li>
        <li>
          <SecondaryList list={additional.list} />
        </li>
      </NavigationList>
    </nav>
  );
};
