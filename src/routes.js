import React from "react";
import Home from "./components/Home";
import About from "./pages/About";
import ProjectGrid from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Work" component={ProjectGrid} />
      </Switch>
    </div>
  );
};
