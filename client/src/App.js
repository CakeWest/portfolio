import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "normalize.css";
import styles from "./app.scss";

import Header from "header/Header";
import Footer from "footer/Footer";
import Home from "home/Home";
import Stack from "stack/Stack";
import Contact from "contact/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faEnvelope,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/fontawesome-free-regular";
library.add(
  faLinkedin,
  faGithub,
  faAngleLeft,
  faAngleRight,
  faWindowMinimize,
  faEnvelope,
  faChevronDown
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/stack" exact component={Stack} />
          <Route path="/contact" component={Contact} />
          <Route path={["/", "/stack"]} exact component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
