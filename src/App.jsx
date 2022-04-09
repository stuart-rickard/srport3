import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Nav from "./routes/Nav";
import Footer from "./routes/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div>
          <Link to="/About">About</Link> | <Link to="/Contact">Contact</Link> |{" "}
          <Link to="/Projects">Projects</Link> |{" "}
          <Link to="/Resume">Resume</Link>
        </div>
        <Outlet />
      </header>
      {/* <footer className="App-footer">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
