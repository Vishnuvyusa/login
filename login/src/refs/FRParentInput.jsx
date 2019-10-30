import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.refInput = React.createRef();
  }

  clickHandler = () => {
    this.refInput.current.focus();
  };

  render() {
    return (
      <div>
        <FRInput ref={this.refInput} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
