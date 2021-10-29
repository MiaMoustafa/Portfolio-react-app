import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // this.props = {
  //   projects: PROJECTS,
  // };
  // }
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default Main;
