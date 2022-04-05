import React from "react";
import "./Resume.css";
import examplePdf from "../assets/example-pdf-document.pdf";

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <a href={examplePdf} download>
        Click here to download example pdf.
      </a>
    </>
  );
}

export default Resume;
