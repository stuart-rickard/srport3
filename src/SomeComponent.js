import React, { useState } from "react";
import "./Nav/Nav.css";

function SomeComponent() {
  console.log("running Soome component");
  const [seconds, setSeconds] = useState(0);

  function startStopwatch() {
    let updatedSeconds = seconds;
    setInterval(() => {
      updatedSeconds += 1;
      console.log(updatedSeconds);
      setSeconds(updatedSeconds);
    }, 1000);
  }

  return (
    <div className="typed-text-line-one">
      {seconds}
      <button onClick={startStopwatch}>Start</button>
    </div>
  );
}

export default SomeComponent;
