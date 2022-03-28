import React, { useState } from "react";
import "./Footer.css";
import octo from "../assets/git-logo-lt.png";

function Footer() {
  return (
    <>
      <h1>
        🦶
        <span> </span>
        <span>
          <a href="https://github.com/stuart-rickard">
            <img src={octo}></img>
          </a>
        </span>
        <span> </span>
        <span>
          <a href="https://www.linkedin.com/in/stuart-rickard-594a044/">in</a>{" "}
        </span>
        <span> </span>
        <span>
          <a href="mailto:stuar1j@yahoo.com?subject = for assignment only this email is not monitored!">
            📧
          </a>
        </span>
        <span> </span> 🦶
      </h1>
    </>
  );
}

export default Footer;
