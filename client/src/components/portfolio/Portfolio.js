import React from "react";

import PortfolioCard from "portfolio/PortfolioCard.js";

import styles from "./portfolio.scss";

function Portfolio() {
  return (
    <div id="portfolio" className={styles.wrapper}>
      <PortfolioCard
        title=""
        description="
        "
        builtWith=""
        githubURL=""
        learnMoreURL=""
        images={[]}
      />
      <PortfolioCard
        title=""
        description=""
        builtWith=""
        githubURL=""
        learnMoreURL=""
        images={[]}
      />
      <PortfolioCard
        title=""
        description=""
        builtWith=""
        githubURL=""
        learnMoreURL=""
        images={[]}
      />
      <PortfolioCard
        title=""
        description=""
        builtWith=""
        githubURL=""
        learnMoreURL=""
        images={[]}
      />
    </div>
  );
}

export default Portfolio;
