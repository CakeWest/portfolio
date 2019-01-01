import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "normalize.css";
import styles from "./app.scss";

import Header from "header/Header.js";
import Footer from "footer/Footer.js";
import Home from "home/Home";
// import Portfolio from "portfolio/Portfolio";
// import About from "about/About";
// import Contact from "contact/Contact";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/fontawesome-free-regular";
library.add(faLinkedin, faGithub, faAngleLeft, faWindowMinimize, faEnvelope);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <Route path="/" exact component={Home} />
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
