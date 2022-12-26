import { useState } from "react";

import { PanelHead } from "../PanelHead";
import { SortBody } from "./SortBody";

import "./styles.css";

export const SortPanel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const changeHandle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className={`filter-panel ${isVisible ? "is-panel-open" : ""}`}>
      <PanelHead
        isVisible={isVisible}
        changeHandle={changeHandle}
        label={"Sort"}
      />
      <SortBody />
    </div>
  );
};
