import React from "react";
import { Link } from "react-router-dom";
import { StyledFooterNav } from "../Footer.styled";

export const FooterNav = ({ links }) => {
  const { label, list } = links;
  return (
    <div>
      <h3>{label}</h3>
      <StyledFooterNav>
        {list.map(({ label, link }, index) => (
          <li key={index}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </StyledFooterNav>
    </div>
  );
};
