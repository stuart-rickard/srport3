import "./Nav.css";
import { Outlet, Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

const firstLine = "stuartRickard";
const secondLine = "coding";
const thirdLine = "portfolio()";

export default function Nav() {
  console.log("running menu");
  const [letterCount, setletterCount] = useState(0);
  const [blink, setBlink] = useState(true);
  const [secondLineVis, setSecondLineVis] = useState(false);
  const [thirdLineVis, setThirdLineVis] = useState(false);
  const [linksVis, setLinksVis] = useState(false);

  // typeWriter
  useEffect(() => {
    if (
      letterCount >=
      firstLine.length + secondLine.length + thirdLine.length + 11
    ) {
      setLinksVis(true);
      console.log("first if");
      return;
    }

    if (letterCount == firstLine.length && !secondLineVis) {
      setSecondLineVis(true);
      // return;
    }

    if (letterCount == firstLine.length + secondLine.length && !thirdLineVis) {
      setThirdLineVis(true);
      // return;
    }

    const timeout = setTimeout(() => {
      setletterCount((prev) => prev + 1);
      console.log(letterCount);
    }, parseInt(Math.random() * 80 + 50));

    return () => clearTimeout(timeout);
  }, [letterCount]);

  // blinker
  useEffect(() => {
    console.log("in useEffect");
    console.log("letterCount is " + letterCount);
    if (
      letterCount >=
      firstLine.length + secondLine.length + thirdLine.length + 4
    ) {
      return;
    }
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 450);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      {/* first line */}
      <h1 className="typed-text-line-one">{`${firstLine.substring(
        0,
        letterCount
      )}${letterCount >= firstLine.length ? " " : blink ? "|" : " "}`}</h1>

      {/* second line */}
      <h1
        className={!secondLineVis ? "typed-text-hidden" : "typed-text-line-two"}
      >{`.${secondLine.substring(0, letterCount - firstLine.length)}${
        letterCount >= firstLine.length + secondLine.length
          ? " "
          : blink
          ? "|"
          : " "
      }`}</h1>

      {/* third line */}
      <h1
        className={
          !thirdLineVis ? "typed-text-hidden" : "typed-text-line-three"
        }
      >{`.${thirdLine.substring(
        0,
        letterCount - firstLine.length - secondLine.length
      )}${
        letterCount >=
        firstLine.length + secondLine.length + thirdLine.length + 4
          ? " "
          : blink
          ? "|"
          : " "
      }`}</h1>
      <div className={!linksVis ? "body-hidden" : "body-visible"}>
        <Link to="/About">About</Link> | <Link to="/Contact">Contact</Link> |{" "}
        <Link to="/Projects">Projects</Link> | <Link to="/Resume">Resume</Link>
      </div>
      <Outlet />
    </>
  );
}
