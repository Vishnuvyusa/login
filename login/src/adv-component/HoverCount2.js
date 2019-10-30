import React, { Component } from "react";

class HoverCount2 extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return <h1 onMouseOver={incrementCounter}>Hover {count} Times</h1>;
  }
}

export default HoverCount2;
