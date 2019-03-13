import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Portfolio from "portfolio/Portfolio";

import styles from "./home.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.home}>
        <div>
          <h1 className={styles.name}>Jake West</h1>
          <div className={styles.horizontalRule} />
          <h2 className={styles.title}>Web Developer</h2>
          <p className={styles.blurb}>
            A Toronto-based developer in love with the entire process of
            building web apps; from wireframing to back-end architecture.
          </p>
        </div>
        <a href="#portfolio" className={styles.toPortfolioButton}>
          Portfolio
          <div>
            <FontAwesomeIcon icon="chevron-down" size="2x" />
          </div>
        </a>
      </div>
      <Portfolio />
    </div>
  );
}
