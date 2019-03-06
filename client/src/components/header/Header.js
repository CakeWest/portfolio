import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, NavLink } from "react-router-dom";
import throttle from "common/throttle";

import styles from "./header.scss";

import Navbar from "./Navbar";

class Header extends Component {
  constructor(props) {
    super(props);

    this.updateNameVisibility = this.updateNameVisibility.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

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
      hideMobileMenu: true,
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

  toggleMobileMenu() {
    // make redundant past 768px
    if (window.innerWidth > 768) return;

    this.setState({
      hideMobileMenu: !this.state.hideMobileMenu
    });
  }

  // update hideName based on vertical scroll
  updateNameVisibility() {
    if (window.scrollY < 230) {
      if (this.state.hideName === false) {
        this.setState({ hideName: true });
      }
    } else if (this.state.hideName === true){
      this.setState({ hideName: false });
    }
  }

  render() {
    let hideNameClass = this.state.hideName ? styles.hide : "";

    return (
      <header>
        <NavLink
          to="/"
          activeStyle={{
            color: "white"
          }}
          onClick={function() {
            window.scrollTo(0, 0);
          }}
          activeClassName=""
          className={`${styles.navLink} ${hideNameClass}`}
        >
          <h1 className={styles.name}>Jake West</h1>
        </NavLink>
        <button className={styles.openMenuBtn} onClick={this.toggleMobileMenu}>
          <FontAwesomeIcon icon="angle-left" size="2x" />
          <FontAwesomeIcon
            icon={["far", "window-minimize"]}
            rotation={90}
            size="2x"
            className="bar-icon"
          />
        </button>
        <Navbar
          hide={this.state.hideMobileMenu}
          toggleMobileMenu={this.toggleMobileMenu}
        />
      </header>
    );
  }
}

export default withRouter(Header);
