import About from "./About.js";
import Project from "./Project.js";
import './App.css';

export default function App() {
  return (
    <div className="App-intro">
        <img src="esylogo1.png" className="App-logo" alt="logo" />
      <h2>
        Hi there! I'm
      </h2>
      <h1>
        Esther Chiamaka Chukwu
      </h1>
      <h3>
Junior Web Developer
      </h3>
      <br/>
      <About />
      <br/>
      <Project />
    </div>
  );
}
