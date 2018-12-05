import React, { Component } from "react";
import Ninja from "./ninja";
import AddNinja from "./AddNinja";
class App extends Component {
  state = {
    ninjas: [
      { name: "Sajjad", age: 25, belt: "red", id: 1 },
      { name: "Fawaz", age: 26, belt: "black", id: 2 },
      { name: "Ali", age: 11, belt: "blue", id: 3 }
    ]
  };
  addNinja = () => {};
  render() {
    return (
      <div className="App">
        <Ninja ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
