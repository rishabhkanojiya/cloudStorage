import React, { Component } from "react";
import Profile from "../components/Profile";

interface Props {}
interface State {}

class MainProfile extends Component<Props, State> {
  state = {};

  render() {
    const { props } = this;
    return <Profile {...props} />;
  }
}

export default MainProfile;
