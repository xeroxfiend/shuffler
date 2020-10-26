import "./App.css";
import { React, Component } from "react";

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

  getRandom() {
    let num = Math.floor(Math.random() * this.state.families.length);
    let newState = this.state.families;
    const currentlyServed = newState.splice(num, 1);
    return this.setState({
      families: newState,
      currentlyServed,
    });
  }

  render() {
    return (
      <div className="App">
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
