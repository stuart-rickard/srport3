import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Footer from "./routes/Footer";
import Resume from "./routes/Resume";
import reportWebVitals from "./reportWebVitals";

render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="*" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
