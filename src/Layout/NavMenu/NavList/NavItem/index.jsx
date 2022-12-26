import React, { useState } from "react";
import { SecondaryList } from "../SecondaryList";

export const NavItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { category } = props;

  const onOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <li onClick={onOpenHandler} className={isOpen ? "opened-menu" : ""}>
      <button>{category.label}</button>
      <SecondaryList list={category.list} />
    </li>
  );
};
