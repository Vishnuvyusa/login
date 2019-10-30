import React, { Component } from "react";

class ClickCounter2 extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return <button onClick={incrementCounter}>Click {count} Times</button>;
  }
}

export default ClickCounter2;
