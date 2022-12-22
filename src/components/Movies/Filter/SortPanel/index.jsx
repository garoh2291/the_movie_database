import { useState } from "react";
import { PanelHead } from "./PanelHead";
import { SortBody } from "./SortBody";
import "./styles.css";

export const SortPanel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const changeHandle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className={`sort_panel ${isVisible ? "is_panel_open" : ""}`}>
      <PanelHead isVisible={isVisible} changeHandle={changeHandle} />
      <SortBody />
    </div>
  );
};
