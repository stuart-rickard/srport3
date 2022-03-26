import React from "react";
// import TypeWriterEffect from "react-typewriter-effect";

const textArray = [
  "s",
  "t",
  "u",
  "a",
  "r",
  "t",
  "R",
  "i",
  "c",
  "k",
  "a",
  "r",
  "d",
  "<br/>",
  ".",
  "p",
  "o",
  "r",
  "t",
  "f",
  "o",
  "l",
  "i",
  "o",
  "<br/>",
  ".",
];

function updateText() {}

function Nav() {
  return (
    <>
      {/* <TypeWriterEffect
        textStyle={{ fontFamily: "Red Hat Display" }}
        startDelay={100}
        cursorColor="black"
        text="This is a single "
        typeSpeed={100}
        // scrollArea={myAppRef}
      /> */}
      <h1 className="typewriter">
        stuartRickard
        <br />
        .portfolio
        <br />
        .contact
      </h1>
    </>
  );
}

export default Nav;
