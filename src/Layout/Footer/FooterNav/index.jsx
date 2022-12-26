import React from "react";
import { Link } from "react-router-dom";

export const FooterNav = ({ links }) => {
  const { label, list } = links;
  return (
    <div>
      <h3>{label}</h3>
      <ul class="footer-nav">
        {list.map(({ label, link }, index) => (
          <li key={index}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
