import React, { Component } from "react";

import "normalize.css";
import "./app.css";

import Header from "components/header/Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
