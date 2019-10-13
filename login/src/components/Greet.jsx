import React from "react";

// function Greet(){
//     return <h1>Vishnu Sharma</h1>;
// }

const Greet = (props) => {
  const {name, title} = props 
  return (
    <div>
      <h1>Hello : {name} === {title}</h1>
    </div>
  );
};

export default Greet;
