import React, { useState, useEffect } from "react";
const firstLine = "stuartRickard";
const secondLine = "coding";
const thirdLine = "portfolio(";

export default function Menu() {
  console.log("running menu");
  const [letterCount, setletterCount] = useState(0);
  const [blink, setBlink] = useState(true);
  const [secondLineVis, setSecondLineVis] = useState(false);
  const [thirdLineVis, setThirdLineVis] = useState(false);

  // typeWriter
  useEffect(() => {
    if (
      letterCount >=
      firstLine.length + secondLine.length + thirdLine.length
    ) {
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
    }, parseInt(Math.random() * 100 + 25));

    return () => clearTimeout(timeout);
  }, [letterCount]);

  // blinker
  useEffect(() => {
    if (
      letterCount >=
      firstLine.length + secondLine.length + thirdLine.length + 10
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
      )}${blink ? "|" : " "})`}</h1>
    </>
  );
}

// if (
//   letterCount === words[index].length + 1 &&
//   index !== words.length - 1 &&
//   !reverse
// ) {
//   setReverse(true);
//   return;
// }

// if (letterCount === 0 && reverse) {
//   setReverse(false);
//   setIndex((prev) => prev + 1);
//   return;
// }