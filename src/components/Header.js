import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ children }) => (
  <header className="page-header">
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not found
          </NavLink>
        </li>
        <li><NavLink to="/athlete">Athlete</NavLink></li>
        <li><NavLink to="/calendar">Calendar</NavLink></li>
        <li><NavLink to="/club">Club</NavLink></li>
        <li><NavLink to="/competition">Competition</NavLink></li>
        <li><NavLink to="/finance">Finance</NavLink></li>
        <li><NavLink to="/group">Group</NavLink></li>
        <li><NavLink to="/invoice">Invoice</NavLink></li>
        <li><NavLink to="/message">Messages</NavLink></li>
        <li><NavLink to="/report">Report</NavLink></li>
        <li><NavLink to="/scout">Scouting</NavLink></li>
        <li><NavLink to="/staff">Staff</NavLink></li>
        <li><NavLink to="/test">Test</NavLink></li>
        <li><NavLink to="/train">Training</NavLink></li>
        <li><NavLink to="/transfer">Transfer</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
