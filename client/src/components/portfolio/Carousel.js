import React, { Component } from "react";

import styles from "./carousel.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
  }

  prev() {
    this.setState((state, props) => {
      if (state.currentIndex > 0) {
        return { currentIndex: (state.currentIndex -= 1) };
      } else {
        return { currentIndex: props.images.length - 1 };
      }
    });
  }

  next() {
    this.setState((state, props) => {
      if (state.currentIndex < props.images.length - 1) {
        return { currentIndex: (state.currentIndex += 1) };
      } else {
        return { currentIndex: 0 };
      }
    });
  }

  setCurrentIndex(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    let carouselDots = this.props.images.map((image, index) => {
      let activeClass = index == this.state.currentIndex ? styles.active : "";

      return (
        <div
          className={`${styles.dot} ${activeClass}`}
          onClick={() => this.setCurrentIndex(index)}
          key={index}
        />
      );
    });

    return (
      <div className={styles.carousel}>
        <img
          className={styles.carouselImage}
          src={this.props.images[this.state.currentIndex]}
        />
        <div className={styles.dotsWrapper}>{carouselDots}</div>
        <button className={styles.left} onClick={this.prev}>
          <FontAwesomeIcon icon="angle-left" />
        </button>
        <button className={styles.right} onClick={this.next}>
          <FontAwesomeIcon icon="angle-right" />
        </button>
      </div>
    );
  }
}
