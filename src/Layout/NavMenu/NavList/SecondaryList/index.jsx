import { Link } from "react-router-dom";
import { SecondList } from "../styles/NavigationList.styled";
export const SecondaryList = ({ list }) => {
  return (
    <SecondList>
      {list.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>{item.label}</Link>
        </li>
      ))}
    </SecondList>
  );
};
