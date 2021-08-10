import React, { Component } from "react";

interface Props {}
interface State {}

class Upload extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="local_container">
        <div className="main_lhs"></div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default Upload;
