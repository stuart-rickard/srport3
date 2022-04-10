import React from "react";
import "./Resume.css";
import examplePdf from "../assets/example-pdf-document.pdf";

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <p>
        Profiencies: HTML, CSS, JavaScript, React, MongoDB, SQL, Git, and more.
      </p>
      <a className="anchor" href={examplePdf} download>
        Please click HERE to download an example pdf.
      </a>
    </>
  );
}

export default Resume;
