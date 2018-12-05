import React from "react";
import AddNinja from "./AddNinja";
//Child component
const Ninja = props => {
  // console.log(this.props);
  const { ninjas } = props;
  //   const ninjaList = ninjas.map(ninja => {
  //     if (ninja.age > 20) {
  //       return (
  //         <div className="ninja">
  //           <div>Name:{ninja.name}</div>
  //           <div>Age: {ninja.age}</div>

  //           <div>Belt: {ninja.belt}</div>
  //           <br />
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });

  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja">
        <div>Name:{ninja.name}</div>
        <div>Age: {ninja.age}</div>

        <div>Belt: {ninja.belt}</div>
        <br />
      </div>
    ) : null;
  });

  return (
    <div className="ninja-list">
      {ninjaList}
      <AddNinja />
    </div>
  );
};

export default Ninja;
