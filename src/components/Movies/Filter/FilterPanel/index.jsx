import { useState } from "react";

import { PanelHead } from "../PanelHead";
import { AvailableBody } from "./AvailableBody";
import { CertificateBody } from "./CertificateBody";
import { GenresBody } from "./GenresBody";
import { KeywordBody } from "./KeywordBody";
import { LanguageBody } from "./LanguageBody";
import { RealeaseBoard } from "./ReleaseBoard";
import { RuntimeBody } from "./RuntimeBody";
import { ScoreBody } from "./ScoreBody";
import { ShowMeBody } from "./ShowMeBody";
import { VotesBoard } from "./VoteBoard";

import { Panel } from "../Filter.styled";

export const FilterPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const changeHandle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <Panel layout={isVisible && "auto"} visible={isVisible && "visible"}>
      <PanelHead
        isVisible={isVisible}
        changeHandle={changeHandle}
        label={"Filter"}
      />
      <ShowMeBody />
      <AvailableBody />
      <RealeaseBoard />
      <GenresBody />
      <CertificateBody />
      <LanguageBody />
      <ScoreBody />
      <VotesBoard />
      <RuntimeBody />
      <KeywordBody />
    </Panel>
  );
};
