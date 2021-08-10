import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars";
import { HomeContextType, UserContextType } from "../constant/types";
import { HomeContext, UserContext } from "../Context";
import { Consume } from "../Context/Consumer";

interface Props {
  userData?: UserContextType;
  homeData?: HomeContextType;
}
interface State {}

class Home extends Component<Props, State> {
  state = {};

  renderFiles = () => {
    const { homeData } = this.props;

    return homeData?.data?.map((file, index) => {
      return (
        <div className="card" key={index} style={{ width: "13rem" }}>
          <div className="left">
            <div className="left__title">{file.name}</div>
            <div className="left_det">
              {file.file} f · {file.size} gb
            </div>
            <ul className="left__member">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className="card__icon">
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
      );
    });
  };

  render() {
    const { userData, homeData } = this.props;
    const { renderFiles } = this;
    const userInfo = userData?.data;
    const files = homeData?.data;

    if (!userData?.data || !homeData?.data) {
      return (
        <div className="container">
          <div className="main_lhs">
            <div className="loader"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="home_container">
        <div className="main_lhs">
          <div className="main_lhs__hero">
            <h1>Hello {userInfo?.name.split(" ")[0]}</h1>
            <p>at the moment you have</p>
            <p>
              <em>{userInfo.space} GB </em>
              of 100 GB free
            </p>
            <div className="progress_bar">
              <div className="progress" />
            </div>
          </div>
          <div className="content">
            <div className="search">
              <div>
                <i className="fa fa-search" aria-hidden="true" />
              </div>
              <input type="text" className="text" placeholder="Search" />
            </div>
            <div className="tab">
              <div>files</div>
              <div className="active">folder</div>
            </div>
            <div className="folder">{renderFiles()}</div>
          </div>
        </div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default Consume(Home, [UserContext, HomeContext]);
// export default Home;
