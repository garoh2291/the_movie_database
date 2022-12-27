import { useState } from "react";

import { PanelHead } from "../PanelHead";
import { Panel } from "../styles/Filter.styled";
import { SortBody } from "./SortBody";

export const SortPanel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const changeHandle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <Panel layout={isVisible && "auto"} visible={isVisible && "visible"}>
      <PanelHead
        isVisible={isVisible}
        changeHandle={changeHandle}
        label={"Sort"}
      />
      <SortBody />
    </Panel>
  );
};
