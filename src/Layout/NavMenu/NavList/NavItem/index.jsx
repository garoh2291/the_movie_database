import React, { useState } from "react";
import { SecondaryList } from "../SecondaryList";
import { NavigationItem } from "../styles/NavigationList.styled";

export const NavItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    category: { label, list },
  } = props;

  const onOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <NavigationItem layout={isOpen && "auto!important"}>
      <button onClick={onOpenHandler}>{label}</button>
      <SecondaryList list={list} />
    </NavigationItem>
  );
};
