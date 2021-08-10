import React, { Component } from "react";
import Home from "../components/Home";

interface Props {}
interface State {}

class MainHome extends Component<Props, State> {
  state = {};

  render() {
    const { props } = this;

    return <Home />;
  }
}

export default MainHome;
