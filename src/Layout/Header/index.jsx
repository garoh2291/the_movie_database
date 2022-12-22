import { NavMenu } from "../NavMenu";
import "./styles.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <NavMenu />
      </div>
    </header>
  );
};
