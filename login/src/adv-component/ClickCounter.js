import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>Click {count} Times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
