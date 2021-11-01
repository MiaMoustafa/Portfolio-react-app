import React from "react";
import { Container, Row, Col } from "reactstrap";
import { projects } from "../data/projects";
import Illuminate from "../assets/img/illuminate.png";
import "../scss/grid.scss";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Projects = (props) => (
  <div key={props.id} className="col-md-4 col-sm-12 pb-2">
    <Card>
      <CardImg src={props.image} alt={props.title} />
      <CardBody>
        <CardTitle
          style={{ color: "#d98882", fontWeight: "600", fontSize: "1.2em" }}
        >
          {props.title}
        </CardTitle>
        <CardText>{props.description}</CardText>
      </CardBody>
    </Card>
  </div>

  /* <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  <img
                    alt="Gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div> */
);

export default Projects;
