import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/validateEmail";

import "./Contact.css";

function Contact() {
  const [formStatus, setFormStatus] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Entered email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios({
      method: "post",
      url: "https://getform.io/f/c584cb7a-f05b-4305-ba65-0587ac5de7f3",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setFormStatus(true);
        setFormState({ name: "", email: "", message: "" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Contact</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        />

        <label>Message: </label>
        <textarea
          name="message"
          defaultValue={message}
          onBlur={handleChange}
        ></textarea>

        {errorMessage && <p>{errorMessage}</p>}

        <button type="submit">Submit</button>

        {formStatus && <p>Thank you. Message sent.</p>}
      </form>
      ;
    </>
  );
}

export default Contact;
