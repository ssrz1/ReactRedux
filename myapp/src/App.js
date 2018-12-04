import React, { Component } from "react";
import Ninja from "./ninja";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Ninja name="Fawaz" age="26" belt="Black" />
      </div>
    );
  }
}

export default App;
