import React, { Component } from "react";
//Child component
class Ninja extends Component {
  render() {
    // console.log(this.props);
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninjas => {
      return (
        <div className="ninja">
          <div>Name:{ninjas.name}</div>
          <div>Age: {ninjas.age}</div>

          <div>Belt: {ninjas.belt}</div>
        </div>
      );
    });
    return <div>{ninjaList}</div>;
  }
}

export default Ninja;
