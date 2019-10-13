import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Vishnu This Temp Message."
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing.."
    });
  }

  render() {
    return (
      <div>
        <h1>Sadgurudaya : {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
