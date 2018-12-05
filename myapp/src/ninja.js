import React from "react";
//Child component
const Ninja = props => {
  // console.log(this.props);
  const { ninjas } = props;
  const ninjaList = ninjas.map(ninjas => {
    return (
      <div className="ninja">
        <div>Name:{ninjas.name}</div>
        <div>Age: {ninjas.age}</div>

        <div>Belt: {ninjas.belt}</div>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninja;
