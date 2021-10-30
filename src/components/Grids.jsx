import { Row } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Projects from "../pages/Projects";
// function RenderImg({ project }) {
//   return (
//     <Card>
//       <CardImg src={project.image} alt={project.name} />
//       <CardBody>
//         <CardTitle>{project.name}</CardTitle>
//         <CardText>{project.description}</CardText>
//       </CardBody>
//     </Card>
//   );
// }
const Grids = (props) => {
  const grids = [
    {
      id: 0,
      title: "illuminate Health",
      image: "./illuminate.png",
      link: "https://illuminate.health",
      description:
        "illuminate Health Inc is a Digital Health Startup focused on safe and accurate medication self-administration. Illuminate Health guides patients to organize complex medication schedules and provides vital communication tools.",
    },
    {
      id: 1,
      title: "Covert Alert ",
      image: "../assets/img/Covertalert.png",
      link: "https://covertalert.com",
      description:
        "Covert Alert is the first hands free voice activated safety app on the market today. Hand’s free applications and devices are the primary development focus for the Company. ",
    },
    {
      id: 2,
      title: "Mountain King",
      image: "../assets/img/KingMountain.png",
      link: "",
      description:
        "Mountain king is an outdoors experts with the knowledge and experience to guide you to the right gear and apparel. They sell the highest-performance outdoor gear as well as clothing and expert-level gear knowledge.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {grids.map((grid) => (
          <Projects />
        ))}
      </div>
    </div>
  );
};

export default Grids;
