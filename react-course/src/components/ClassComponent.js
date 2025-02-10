import React, { Component } from "react";
import Display from "./Display";

export default class ClassComponent extends Component {
  state = {
    name: "State Change?",
  };

  render() {
    return (
      <div>
        <Display name= {this.state.name}/>
      </div>
    );
  }
}
