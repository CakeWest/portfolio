import React, { Component } from "react";

import styles from "./header.scss";

import Navbar from "./Navbar";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideNav: true
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    // make redundant past 768px
    if (window.innerWidth > 768) return;

    this.setState({
      hideNav: !this.state.hideNav
    });
  }

  render() {
    return (
      <header>
        <h1 className={styles.title}>Jake West</h1>
        <button className={styles.openMenuBtn} onClick={this.toggleNav}>
          O
        </button>
        <Navbar hide={this.state.hideNav} toggleNav={this.toggleNav} />
      </header>
    );
  }
}

export default Header;
