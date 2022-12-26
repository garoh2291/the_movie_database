import "./styles.css";

export const PanelHead = (props) => {
  const { isVisible, changeHandle, label } = props;
  return (
    <div className="sort-panel-head" onClick={changeHandle}>
      <p>{label}</p>
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
