import { SORT_ITEMS } from "../../../../../data";
import "./styles.css";

export const SortBody = () => {
  const changeQuery = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="sort_panel_body">
      <h3>Sort Results By</h3>
      <select name="sort-select" id="sort-select" onChange={changeQuery}>
        {SORT_ITEMS.map((item, index) => (
          <option value={item.query} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
