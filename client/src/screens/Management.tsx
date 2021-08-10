import React, { Component } from "react";
import Management from "../components/Management";

interface Props {}
interface State {}

class MainManagement extends Component<Props, State> {
  state = {};

  render() {
    const { props } = this;

    return <Management {...props} />;
  }
}

export default MainManagement;
