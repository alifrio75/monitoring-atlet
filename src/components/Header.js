import React from "react";
import { NavLink } from "react-router-dom";
import Modules from "./service/Modules";

const Header = ({ children, i }) => (
  <header className="page-header">
    <nav>
      <ul>
        {Modules.map(menu => (
          <li key={i}>
            <NavLink to={menu.to}>{menu.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
