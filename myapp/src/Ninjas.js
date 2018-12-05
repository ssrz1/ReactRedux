import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  return (
    <div className="ninja-list">
      {ninjas.map(ninja => {
        return ninja.age > 20 ? (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button>
              {" "}
              {/* since we are passing and 'id' using () it invokes here nomally we just use{deleteNinja} so counter this we are using and annonymus fuction so that it only get call when we click it */}
              onClick=
              {() => {
                deleteNinja(ninja.id);
              }}
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
