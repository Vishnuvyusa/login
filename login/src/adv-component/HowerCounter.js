import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HowerCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}> Hower {count} Times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(HowerCounter);
