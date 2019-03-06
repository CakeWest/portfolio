import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.scss";

function navbar(props) {
  let hideClass = props.hide ? styles.hide : "";

  return (
    <nav className={hideClass} onClick={props.toggleMobileMenu}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
