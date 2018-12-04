import React, { Component } from "react";
//Child component
class Ninja extends Component {
  render() {
    // console.log(this.props);
    const { ninjas } = this.props;
    return (
      <div className="ninja">
        <div>Name:{name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    );
  }
}

export default Ninja;
