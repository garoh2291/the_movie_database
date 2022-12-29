import { StyledHead } from "../Filter.styled";

export const PanelHead = (props) => {
  const { isVisible, changeHandle, label } = props;
  return (
    <StyledHead onClick={changeHandle}>
      <p>{label}</p>
      <span>
        {isVisible ? (
          <i className="bx bxs-chevron-down"></i>
        ) : (
          <i className="bx bxs-chevron-right"></i>
        )}
      </span>
    </StyledHead>
  );
};
