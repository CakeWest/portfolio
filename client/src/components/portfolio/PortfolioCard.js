import React, { Component } from "react";

import Carousel from "./Carousel";

import styles from "./portfolioCard.scss";

function PortfolioCard({
  title,
  description,
  builtWith,
  githubURL,
  learnMoreURL,
  imageURLs
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.builtWith}>{builtWith}</div>
      <div className={styles.linksWrapper}>
        <a href={githubURL}>Github</a>
        <a href={learnMoreURL}>Learn More</a>
      </div>
    </div>
  );
}

export default PortfolioCard;
