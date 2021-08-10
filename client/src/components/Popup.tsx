import React, { Component } from "react";
import { PopUpContextType } from "../constant/types";
import { ShowPopupContext } from "../Context";
import { Consume } from "../Context/Consumer";

interface Props {
  ShowPopupData: PopUpContextType;
}
interface State {}

class Popup extends Component<Props, State> {
  state = {};

  render() {
    const { ShowPopupData } = this.props;
    const val = ShowPopupData.showPopup ? "in" : "out";
    return (
      <div
        className={`popup ${val}`}
        style={{
          margin: "0 0 0 3rem",
          width: "30rem",
        }}
      >
        <div className="btn__list">
          <div className="button">
            <i className="fa fa-upload" aria-hidden="true" />
            <p>Upload</p>
          </div>
          <div className="button up">
            <i className="fa fa-camera" aria-hidden="true" />
            <p>Photo</p>
          </div>
          <div className="button">
            <i className="fa fa-eye" aria-hidden="true" />
            <p>Scan</p>
          </div>
        </div>
        <div
          className="close"
          onClick={() => {
            ShowPopupData.setShowPopup(false);
          }}
        >
          <i className="fa fa-plus" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Consume(Popup, [ShowPopupContext]);
