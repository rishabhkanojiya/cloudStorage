import React, { Component } from "react";
import OnBoard from "../components/OnBoard";

interface Props {}

interface State {}

class MainOnBoard extends Component<Props, State> {
  state = {};

  render() {
    const { props } = this;

    return <OnBoard {...props} />;
  }
}

export default MainOnBoard;
