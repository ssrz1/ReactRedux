import React, { Component } from "react";
import Ninja from "./ninja";
class App extends Component {
  state = {
    ninjas: [
      { name: "Sajjad", age: 25, belt: "red", id: 1 },
      { name: "Fawaz", age: 26, belt: "black", id: 2 },
      { name: "Ali", age: 25, belt: "blue", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
