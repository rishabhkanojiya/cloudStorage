import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars";
import { LocalContextType } from "../constant/types";
import { LocalContext } from "../Context";
import { Consume } from "../Context/Consumer";

interface Props {
  localData?: LocalContextType;
}
interface State {}

class Localstorage extends Component<Props, State> {
  state = {};

  renderFiles = () => {
    const { localData } = this.props;

    return localData.data.map((files) => {
      let sClass = "";
      switch (files.fromat) {
        case "mp3":
          sClass = "file--video";

          break;
        case "jpg":
          sClass = "file--image";

          break;
        case "archive":
          sClass = "file--archive";

          break;
        case "doc":
          sClass = "file--document";

          break;

        default:
          sClass = "file--video";
          break;
      }
      return (
        <div className="file">
          <div className={`file__img ${sClass}`}>
            <i className="fa fa-music" aria-hidden="true" />
          </div>
          <div className="file__name">
            <div className="file__name--main">{files.name}</div>
            <div className="file__name--sub">
              {files.fromat} · {files.size} mb
            </div>
          </div>
          <div className="file__more">
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
      );
    });
  };
  render() {
    const { localData } = this.props;
    const { renderFiles } = this;
    if (!localData?.data) {
      return (
        <div className="container">
          <div className="main_lhs">
            <div className="loader"></div>
          </div>
        </div>
      );
    }
    return (
      <div className="local_container">
        <div className="main_lhs">
          <div className="main_lhs__hero">
            <h1>Local storage</h1>
          </div>
          <div className="content">
            <div className="search">
              <div>
                <i className="fa fa-search" aria-hidden="true" />
              </div>
              <input type="text" className="text" placeholder="Search" />
            </div>
            <ul className="category">
              <li className="category__items">
                <div className="category__items--img category__items--video">
                  <i className="fa fa-file-video-o" aria-hidden="true" />
                </div>
                <div className="category__items--title">Video</div>
              </li>
              <li className="category__items">
                <div className="category__items--img category__items--image">
                  <i className="fa fa-file-image-o" aria-hidden="true" />
                </div>
                <div className="category__items--title">Image</div>
              </li>
              <li className="category__items">
                <div className="category__items--img category__items--archive">
                  <i className="fa fa-music" aria-hidden="true" />
                </div>
                <div className="category__items--title">Music</div>
              </li>
              <li className="category__items">
                <div className="category__items--img category__items--image">
                  <i className="fa fa-android" aria-hidden="true" />
                </div>
                <div className="category__items--title">Android</div>
              </li>
            </ul>

            <div className="files" style={{ height: "60%" }}>
              <Scrollbars style={{ width: "inherit", height: "100%" }} autoHide>
                {renderFiles()}
                <div className="file">
                  <div className="file__img file--image">
                    <i className="fa fa-music" aria-hidden="true" />
                  </div>
                  <div className="file__name">
                    <div className="file__name--main">
                      Franky Wah - Aftertime
                    </div>
                    <div className="file__name--sub">mp3 · 9.2 mb</div>
                  </div>
                  <div className="file__more">
                    <i className="fa fa-ellipsis-v" aria-hidden="true" />
                  </div>
                </div>
                <div className="file">
                  <div className="file__img file--archive">
                    <i className="fa fa-music" aria-hidden="true" />
                  </div>
                  <div className="file__name">
                    <div className="file__name--main">
                      Franky Wah - Aftertime
                    </div>
                    <div className="file__name--sub">mp3 · 9.2 mb</div>
                  </div>
                  <div className="file__more">
                    <i className="fa fa-ellipsis-v" aria-hidden="true" />
                  </div>
                </div>
                <div className="file">
                  <div className="file__img file--video">
                    <i className="fa fa-music" aria-hidden="true" />
                  </div>
                  <div className="file__name">
                    <div className="file__name--main">
                      Franky Wah - Aftertime
                    </div>
                    <div className="file__name--sub">mp3 · 9.2 mb</div>
                  </div>
                  <div className="file__more">
                    <i className="fa fa-ellipsis-v" aria-hidden="true" />
                  </div>
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default Consume(Localstorage, [LocalContext]);
