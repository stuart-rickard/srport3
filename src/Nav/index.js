import React, { useState } from "react";
import "./Nav.css";

const textArrayFirstLine = [
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
];
const textArraySecondLine = [".", "p", "o", "r", "t", "f", "o", "l", "i", "o"];

function Nav() {
  const [typedTextFirstLine, setTypedTextFirstLine] = useState("ol");
  const [typedTextSecondLine, setTypedTextSecondLine] = useState(".portfolio");
  // const [typedTextFirstLine, setTypedTextFirstLine] = useState("hello world today <br /> tada");

  //   setTypedTextFirstLine("new");

  //    function typeText() {

  //       textArrayFirstLine.forEach(letter => {
  //            setTimeout(
  //               {
  //                 setTypedTextFirstLine("new")
  //             }, 2000);
  //       })

  //   }
  return (
    <>
      <h1 className="typed-text-line-one">{typedTextFirstLine}</h1>
      <h1 className="typed-text-line-two">{typedTextSecondLine}</h1>
      <h1 className="typed-text-line-three">.resume</h1>
    </>
  );
}

export default Nav;
