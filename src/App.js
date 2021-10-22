import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
