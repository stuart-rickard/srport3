import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  console.log("running nav");
  //   const textArrayFirstLine = [
  //     "s",
  //     "t",
  //     "u",
  //     "a",
  //     "r",
  //     "t",
  //     "R",
  //     "i",
  //     "c",
  //     "k",
  //     "a",
  //     "r",
  //     "d",
  //   ];
  //   const textArraySecondLine = [
  //     ".",
  //     "p",
  //     "o",
  //     "r",
  //     "t",
  //     "f",
  //     "o",
  //     "l",
  //     "i",
  //     "o",
  //   ];

  const [firstLine, setFirstLine] = useState("stuartRickard");

  // textArrayFirstLine.forEach(letter => {

  //   setTimeout(() => {
  //     if (firstLine == "stuart") {
  //       setFirstLine("rickard");
  //       console.log(" changed to rickard");
  //     } else {
  //       setFirstLine("stuart");
  //       console.log("changed to stuart");
  //     }
  //   }, 10000);

  // let timeoutID;

  // let runbefore = false;

  // const functionTwo = function () {
  //   if (runbefore == false) {
  //     runbefore = true;
  //     console.log("i will wait for you");
  //   }
  //   clearTimeout(timeoutID);
  // };

  function functionOne() {
    // console.log("running fu 1");

    // timeoutID = setTimeout(functionTwo, 5000);
    // console.log(timeoutID);

    return firstLine;
  }

  return (
    <>
      <h1 className="typed-text-line-one">{functionOne()}</h1>
      <h1 className="typed-text-line-two">.portfolio</h1>
      <h1 className="typed-text-line-three">.resume</h1>
    </>
  );
}

export default Nav;
