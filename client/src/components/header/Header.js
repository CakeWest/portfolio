import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import throttle from "common/throttle";

import styles from "./header.scss";

import Navbar from "./Navbar";

class Header extends Component {
  constructor(props) {
    super(props);

    // bind this
    this.updateNameVisibility = this.updateNameVisibility.bind(this);
    this.toggleNav = this.toggleNav.bind(this);

    let updateNameVisibilitythrottled = throttle(
      this.updateNameVisibility,
      100
    );

    // hide name & add scroll event listener if home is initial page
    let hideName = false;
    if (window.location.pathname === "/") {
      hideName = true;
      window.addEventListener("scroll", updateNameVisibilitythrottled, false);
    }

    this.state = {
      hideNav: true,
      hideName
    };

    // update hiding of name when page location changes
    props.history.listen(location => {
      let hideName = location.pathname === "/" ? true : false;
      this.setState({ hideName });

      if (location.pathname !== "/") {
        window.removeEventListener(
          "scroll",
          updateNameVisibilitythrottled,
          false
        );
      } else {
        window.addEventListener("scroll", updateNameVisibilitythrottled, false);
      }
    });
  }

  // toggle the mobile navbar
  toggleNav() {
    // make redundant past 768px
    if (window.innerWidth > 768) return;

    this.setState({
      hideNav: !this.state.hideNav
    });
  }

  // update hideName based on vertical scroll
  updateNameVisibility() {
    console.log("header.updateVis");
    console.log(window.scrollY);

    if (window.scrollY < 230) {
      this.setState({ hideName: true });
    } else {
      this.setState({ hideName: false });
    }
  }

  render() {
    let hideClass = this.state.hideName ? styles.hide : "";

    return (
      <header>
        <h1 className={`${styles.title} ${hideClass}`}>Jake West</h1>
        <button className={styles.openMenuBtn} onClick={this.toggleNav}>
          <FontAwesomeIcon icon="angle-left" size="2x" />
          <FontAwesomeIcon
            icon={["far", "window-minimize"]}
            rotation={90}
            size="2x"
            className="bar-icon"
          />
        </button>
        <Navbar hide={this.state.hideNav} toggleNav={this.toggleNav} />
      </header>
    );
  }
}

export default withRouter(Header);
