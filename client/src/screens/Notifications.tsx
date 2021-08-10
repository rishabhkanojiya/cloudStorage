import React, { Component } from "react";
import Notifications from "../components/Notifications";

interface Props {}
interface State {}

class MainNotifications extends Component<Props, State> {
  state = {};

  render() {
    const { props } = this;

    return <Notifications {...props} />;
  }
}

export default MainNotifications;
