import "./styles.css";

export const PanelHead = (props) => {
  const { isVisible, changeHandle } = props;
  return (
    <div className="sort_panel_head" onClick={changeHandle}>
      <p>Sort</p>
      <span>
        {isVisible ? (
          <i className="bx bxs-chevron-down"></i>
        ) : (
          <i className="bx bxs-chevron-right"></i>
        )}
      </span>
    </div>
  );
};
