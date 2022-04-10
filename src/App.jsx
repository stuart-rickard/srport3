import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Nav from "./routes/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <div className="App-links">
          <Link to="/About">About</Link> | <Link to="/Contact">Contact</Link> |{" "}
          <Link to="/Projects">Projects</Link> |{" "}
          <Link to="/Resume">Resume</Link>
        </div>
        <Outlet /> */}
      </header>
    </div>
  );
}

export default App;
