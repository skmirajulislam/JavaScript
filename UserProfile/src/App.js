import "./styles.css";
import { Component } from "react";
// Use Hero, Skills and About component to display your information
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";

class App extends Component {
  render() {
    return (
      <>
      <Hero/>
      <Skills/>
      <About/>
      </>

    )}
}
export default App