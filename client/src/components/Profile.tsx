import { History } from "history";
import React, { Component, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { config } from "../constant/config";
import { UserContextType } from "../constant/types";
import { UserContext } from "../Context";
import { Consume } from "../Context/Consumer";

interface Props {
  history?: History;
  userData?: UserContextType;
}
interface State {}

class Profile extends Component<Props & State & RouteComponentProps> {
  state = {
    camera: false,
    data: false,
  };

  render() {
    const { history, userData } = this.props;
    const { camera, data } = this.state;
    if (!userData?.data) {
      return (
        <div className="container">
          <div className="main_lhs">
            <div className="loader"></div>
          </div>
        </div>
      );
    }

    const {
      data: { files, folder, name, space },
    } = userData;
    return (
      <div className="profile_container">
        <div className="main_lhs">
          <div className="main_lhs__title">
            <h1>Profile</h1>
            <i className="fa fa-pencil" aria-hidden="true" />
          </div>
          <div className="main_lhs__hero">
            <div className="user">
              <div className="user--img" />
              <div className="user__name">
                <h3>{name}</h3>
                <p>
                  {files} files · {folder} folders
                </p>
              </div>
            </div>
            <p>
              <em>{space} </em>
              of 100 GB free
            </p>
            <div className="progress_bar">
              <div className="progress" />
            </div>
          </div>
          <div className="content">
            <div className="btn">Increase storage space</div>
            <div className="files">
              <div className="file">
                <div
                  className="file__name"
                  onClick={() => {
                    history.push(config.routes.management);
                  }}
                >
                  <div className="file__name--main">Storage management</div>
                  <div className="file__name--sub" />
                </div>
                <div className="file__more">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                {/* <div class="file__switch">
                <label class="label label--on">
                  <input type="checkbox" class="label__input" />

                  <div class="label__circle"></div>
                </label>
              </div> */}
              </div>
              <div className="file">
                <div className="file__name">
                  <div className="file__name--main">Devices</div>
                  <div className="file__name--sub">iPhone, Macbook, iPad</div>
                </div>
                <div className="file__more">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </div>
              <div className="file">
                <div className="file__name">
                  <div className="file__name--main">Camera uploads</div>
                  <div className="file__name--sub" />
                </div>
                <div
                  className="file__switch"
                  onClick={() => {
                    this.setState({ camera: !camera });
                  }}
                >
                  <label
                    className={`label ${camera ? "label--on" : "label--off"}`}
                  >
                    <input type="checkbox" className="label__input" />
                    <div className="label__circle" />
                  </label>
                </div>
              </div>
              <div className="file">
                <div className="file__name">
                  <div className="file__name--main">
                    Use data for file transfer
                  </div>
                  <div className="file__name--sub" />
                </div>
                <div
                  className="file__switch"
                  onClick={() => {
                    this.setState({ data: !data });
                  }}
                >
                  <label
                    className={`label ${data ? "label--on" : "label--off"}`}
                  >
                    <input type="checkbox" className="label__input" />
                    <div className="label__circle" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default Consume(withRouter(Profile), [UserContext]);
