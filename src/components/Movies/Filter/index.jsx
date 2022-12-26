import { FilterButton } from "./FilterButton";
import { FilterPanel } from "./FilterPanel";
import { SortPanel } from "./SortPanel";

import "./styles.css";

export const FilterSection = ({ onFilter }) => {
  return (
    <div className="filter-section">
      <SortPanel />
      <FilterPanel />
      <FilterButton onFilter={onFilter} />
    </div>
  );
};
