import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/png/logoWhite.png";
import "../scss/navbar.scss";

function Header() {
  return (
    <div className="row">
      <div className="col-md-12">
        {/* <Router> */}
        <Navbar className="nav" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ width: "90%" }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Projects">Work </Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/About">About </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default Header;
