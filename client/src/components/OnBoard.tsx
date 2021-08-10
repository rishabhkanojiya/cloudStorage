import React, { Component } from "react";
import { History } from "history";
import { config } from "../constant/config";
interface Props {
  history?: History;
}

interface State {}

class OnBoard extends Component<Props, State> {
  state = {};

  render() {
    const { history } = this.props;
    return (
      <div className="container">
        <div className="main_lhs">
          <div className="hero_bg">
            <div className="hero_bg__text">
              Your cloud storage safe and sound
            </div>
            <div
              className="hero_bg__btn"
              onClick={() => {
                history?.push(config.routes.home);
              }}
            />
          </div>
        </div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default OnBoard;
