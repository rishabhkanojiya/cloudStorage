import React, { Component } from "react";
import { History } from "history";
import { config } from "../constant/config";

interface Props {
  history?: History;
}
interface State {}

class Profile extends Component<Props, State> {
  state = {};

  render() {
    const { history } = this.props;
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
                <h3>Jessie Roberts</h3>
                <p>1458 files · 25 folders</p>
              </div>
            </div>
            <p>
              <em>32,5 GB </em>
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
                <div className="file__switch">
                  <label className="label label--on">
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
                <div className="file__switch">
                  <label className="label label--off">
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

export default Profile;
