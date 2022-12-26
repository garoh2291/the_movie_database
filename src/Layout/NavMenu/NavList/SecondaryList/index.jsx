import { Link } from "react-router-dom";
import "./styles.css";
export const SecondaryList = ({ list }) => {
  return (
    <ul className="secondary-list">
      {list.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
