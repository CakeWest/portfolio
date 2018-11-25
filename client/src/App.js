import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "normalize.css";
import "./app.css";

import Header from "components/header/Header.js";
// import Home from "components/home/Home";
// import Portfolio from "components/portfolio/Portfolio";
// import About from "components/about/About";
// import Contact from "components/contact/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
