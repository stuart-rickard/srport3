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
import harvestersImage from "../assets/happy-harvesters.jpg";
import circlesImage from "../assets/circles.png";
import mondRandomImage from "../assets/mond-art.png";
import penguinPlannerImage from "../assets/penguin.png";
import sunnyWeekendImage from "../assets/sunny-weekend.png";
import runBuddyImage from "../assets/run-buddy.png";
import horiseonImage from "../assets/horiseon.png";

const projectCardDataArray = [
  {
    title: "Happy Harvester",
    imgSrc: harvestersImage,
    alt: "screenshot of apple farm sim game",
    text: "Game that allows the player to make game money by growing apples and making apple products",
    gitLink: "https://github.com/scottrohrig/apple-orchard-games",
    deployedLink: "https://happy-harvesters.herokuapp.com/login",
  },
  {
    title: "Cirles",
    imgSrc: circlesImage,
    alt: "multi-colored graphic pattern with circles",
    text: "Uses the CSS box model to rotate concentric circles within one another",
    gitLink: "https://github.com/stuart-rickard/sandbox/tree/main/circles",
    deployedLink: "https://stuart-rickard.github.io/sandbox/circles/",
  },
  {
    title: "MondRandom",
    imgSrc: mondRandomImage,
    alt: "multi-colored graphic pattern with lines",
    text: "Uses CSS grid and random number generator to create an abstract pattern",
    gitLink: "https://github.com/stuart-rickard/mond-random",
    deployedLink: "https://stuart-rickard.github.io/mond-random/art.html",
  },
  {
    title: "Penguin Planner",
    imgSrc: penguinPlannerImage,
    alt: "screenshot showing event planner website",
    text: "Full-stack app for organizing an event with friends",
    gitLink: "https://github.com/stuart-rickard/gp-penguin",
    deployedLink: "https://penguin-planner.herokuapp.com/",
  },
  {
    title: "Sunny Weekend",
    imgSrc: sunnyWeekendImage,
    alt: "screenshot showing a weekend planner website",
    text: "Uses Google Maps and OpenWeather API's to select a city by location and temperature",
    gitLink: "https://github.com/deivrs60/sunny-weekend",
    deployedLink: "https://deivrs60.github.io/sunny-weekend/",
  },
  {
    title: "Run Buddy",
    imgSrc: runBuddyImage,
    alt: "screenshot showing a website for connecting trainers to clients",
    text: "A two-page website created in response to a Bootcamp course challenge",
    gitLink: "#",
    deployedLink: "https://stuart-rickard.github.io/runbuddy2/",
  },
  {
    title: "Horiseon",
    imgSrc: horiseonImage,
    alt: "screenshot showing a website for search engine optimization services",
    text: "A website with refactored code created in response to a Bootcamp course challenge",
    gitLink: "https://github.com/stuart-rickard/urban-octo-telegram",
    deployedLink:
      "https://stuart-rickard.github.io/urban-octo-telegram/Develop/",
  },
];

export default function ProjectCard() {
  return (
    <>
      {projectCardDataArray.map((project, index) => (
        <Col md="8" sm="10" lg="5">
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
              <CardLink>Link: </CardLink>
              <CardLink href={project.gitLink}>GitHub</CardLink>
              <CardLink href={project.deployedLink}>Deployed</CardLink>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}
