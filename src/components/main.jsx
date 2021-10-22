import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import { PROJECTS } from "../shared/projects";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = {
      projects: PROJECTS,
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        {/* <Home /> */}

        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
