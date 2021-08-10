import React, { Component } from "react";
import Menu from "./Menu";

interface Props {}
interface State {}

class Notifications extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="notif_container">
        <div className="main_lhs">
          <div className="content">
            <div className="content__title">
              <h1>Notifications</h1>
            </div>
            <div
              className="content__img"
              style={{
                backgroundImage: "url(../img/notification/illustration.png)",
              }}
            />
            <div className="content__text">No notifcations yet</div>
            <div className="content__subtext">
              Here you will see the external changes in your shared folders,
              tags from your peers and other updates
            </div>
          </div>
        </div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default Notifications;
