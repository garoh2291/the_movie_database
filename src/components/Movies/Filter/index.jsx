import { SortPanel } from "./SortPanel";
import "./styles.css";
export const FilterSection = ({ onFilter }) => {
  return (
    <div className="filter_section">
      <SortPanel onFilter={onFilter} />
    </div>
  );
};
