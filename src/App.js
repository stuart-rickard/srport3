import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Resume from "./Resume/Resume";
import Footer from "./Footer/Footer";
import SomeComponent from "./SomeComponent";

function App() {
  // setTimeout(change, 5000);
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <SomeComponent /> */}
      </header>
      <About />
      <Projects />
      <Contacts />
      <Resume />
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
