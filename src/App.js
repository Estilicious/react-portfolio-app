import Header from "./Header.js";
import About from "./About.js";
import Project from "./Project.js";
import Footer from "./Footer.js";
import './App.css';

export default function App() {
  return (
    <div className="App-container">
    <Header />
  
    <div className="App-intro">
      <h2>
        Hi there! I'm
      </h2>
      <h1>
        The Rising sun
      </h1>
      <h3>
Junior Web Developer
      </h3>
      <br/>
      <About />
      <br/>
      <Project />
<br/>
      <Footer />
    </div>
    </div>
  );
}
