import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { PROJECTS } from "./shared/project";

function App() {
  // constructor(props) {
  //   super(props);
  //   this.props = {
  //     projects: PROJECTS,
  //   };
  // }

  // render() {
  //   const project = this.props.projects.map((project) => {
  //     return (
  //       <div key={project.id} className="col-md-5 m-1">
  //         <RenderImg project={project} />
  //       </div>
  //     );
  //   });

  // function RenderImg({ item }) {
  //   return (
  //     <Card>
  //       <CardImg src={item.image} alt={item.title} />
  //       <CardBody>
  //         <CardTitle>{item.title}</CardTitle>
  //         <CardText>{item.description}</CardText>
  //       </CardBody>
  //     </Card>
  //   );
  // }

  return (
    <BrowserRouter>
      <Router>
        <Routes />
      </Router>
    </BrowserRouter>
  );
}

export default App;
