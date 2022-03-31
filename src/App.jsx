import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Nav from "./routes/Nav";
import Typing from "./routes/Typing";
// import About from "./routes/About";
// import Projects from "./routes/Projects";
// import Contact from "./routes/Contact";
// import Resume from "./routes/Resume";
import Footer from "./routes/Footer";
// import SomeComponent from "./SomeComponent";

function App() {
  // setTimeout(change, 5000);
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Typing />
        {/* <SomeComponent /> */}
        <div>
          <Link to="/About">About</Link> | <Link to="/Contact">Contact</Link> |{" "}
          <Link to="/Projects">Projects</Link> |{" "}
          <Link to="/Resume">Resume</Link>
        </div>
        <Outlet />
      </header>
      {/* <About />
      <Projects />
      <Contact />
      <Resume /> */}
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
