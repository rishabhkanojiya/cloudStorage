import React, { Component } from "react";
import Localstorage from "../components/Localstorage";

interface Props {}
interface State {}

class MainLocalstorage extends Component<Props, State> {
  state = {};

  render() {
    const { props } = this;

    return <Localstorage />;
  }
}

export default MainLocalstorage;
