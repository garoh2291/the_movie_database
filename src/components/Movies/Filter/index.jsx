import { FilterButton } from "./FilterButton";
import { FilterPanel } from "./FilterPanel";
import { SortPanel } from "./SortPanel";

import { StyledFilter } from "./styles/Filter.styled";

export const FilterSection = ({ onFilter }) => {
  return (
    <StyledFilter>
      <SortPanel />
      <FilterPanel />
      <FilterButton onFilter={onFilter} />
    </StyledFilter>
  );
};
