import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardLink,
  CardSubtitle,
  CardText,
} from "reactstrap";

import "./ProjectCard.css";
import circlesImage from "../assets/circles.png";

const projectCardDataArray = [
  {
    title: "Cirles",
    imgSrc: circlesImage,
    alt: "multi-colored graphic pattern with circles",
    text: "Uses the CSS box model to rotate concentric circles within one another",
    gitLink: "https://github.com/stuart-rickard/sandbox/tree/main/circles",
    deployedLink: "https://stuart-rickard.github.io/sandbox/circles/",
  },
];

export default function ProjectCard() {
  return (
    <Col md="8" sm="10" lg="5">
      {projectCardDataArray.map((project, index) => (
        <Card key={index}>
          <CardBody>
            <CardTitle tag="h5">{project.title}</CardTitle>
          </CardBody>
          <img
            className="card-img"
            alt={project.alt}
            src={project.imgSrc}
            width="100%"
          />
          <CardBody>
            <CardText>{project.text}</CardText>
            <CardLink href={project.gitLink}>GitHub</CardLink>
            <CardLink href={project.deployedLink}>Deployed</CardLink>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
}
