import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    //this.state.count = this.state.count + 1
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log("In State : ", this.state.count);
    //   }
    // );

    this.setState(
      previousVal => ({
        count: previousVal.count + 1
      }),
      () => {
        console.log("In State : ", this.state.count);
      }
    );
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div> Count - {this.state.count} </div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
