import React from "react";

import styles from "./navbar.scss";

function navbar(props) {
  let hide = props.hide ? styles.hide : "";

  return (
    <nav className={hide} onClick={props.toggleNav}>
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default navbar;
