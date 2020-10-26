import "./App.css";
import { React, Component } from "react";
import bell from "../src/dinner-bell-triangle.mp3";

class App extends Component {
  state = {
    families: [
      "Julie & Caleb",
      "Mary & Brian",
      "Allen & Crystal",
      "David & Laurel",
      "Wendy & Ty",
      "Laura & Matt",
      "Mom & Dad",
    ],
    currentlyServed: "",
  };
  audioEl = {};

  componentDidMount() {
    this.audioEl = document.getElementById("audio");
  }

  getRandom() {
    let num = Math.floor(Math.random() * this.state.families.length);
    let newState = this.state.families;
    const currentlyServed = newState.splice(num, 1);
    this.audioEl.play();
    return this.setState({
      families: newState,
      currentlyServed,
    });
  }

  render() {
    return (
      <div className="App">
        <audio id="audio" src={bell}></audio>
        <div className="randomizer">
          <span>Family Randomizer 3000</span>
          <button onClick={() => this.getRandom()} className="shuffle">
            Shuffle!
          </button>
          <div className="title">Family being served:</div>
          <div className="serving">
            {!this.state.currentlyServed
              ? "click shuffle!"
              : this.state.currentlyServed}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
