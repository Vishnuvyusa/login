import React from "react";
import { original } from "immer";

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0
        };
      }
    
      increment = () => {
        this.setState(previousState => {
          return { count: previousState.count + 1 };
        });
      };
    render() {
      return <OriginalComponent count={this.state.count} increment={this.increment}/>;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
