import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import About from "../pages/About";
import Home from "./Home";
import Contact from "../pages/Contact";
// import { NavLink } from "react-router-dom";
import logo from "../assets/png/logoWhite.png";

import "../scss/navbar.scss";

function Header() {
  return (
    <div className="row">
      <div className="col-md-12">
        <Router>
          <Navbar className="nav" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{ width: "90%" }}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>

    // <div className="navbar">
    //   <img src={logo} alt="logo" />
    //   <ul>
    //     <NavLink className="links" to="/Home">
    //       Home
    //     </NavLink>
    //     <NavLink className="links" to="/project">
    //       Work
    //     </NavLink>
    //     <NavLink className="links" to="/contact">
    //       Contact
    //     </NavLink>
    //     <NavLink className="links" to="/about">
    //       About
    //     </NavLink>
    //   </ul>
    // </div>
  );
}
export default Header;
