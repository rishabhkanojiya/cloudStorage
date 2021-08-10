import React, { Component } from "react";
import Menu from "./Menu";

interface Props {}
interface State {}

class Management extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="manage_container">
        <div className="main_lhs">
          <div className="main_lhs__hero">
            <h2>Storage management</h2>
          </div>
          <div className="content">
            <ul className="category">
              <li className="category__items">
                <div className="category__items--img category__items--video" />
                <div className="category__items--title">Music</div>
              </li>
              <li className="category__items">
                <div className="category__items--img category__items--image" />
                <div className="category__items--title">Images</div>
              </li>
              <li className="category__items">
                <div className="category__items--img category__items--archive" />
                <div className="category__items--title">Archive</div>
              </li>
              <li className="category__items">
                <div className="category__items--img category__items--document" />
                <div className="category__items--title">Document</div>
              </li>
            </ul>
            <div className="files">
              <div className="file">
                <div className="file__img file--video">
                  <i className="fa fa-music" aria-hidden="true" />
                </div>
                <div className="file__name">
                  <div className="file__name--main">Franky Wah - Aftertime</div>
                  <div className="file__name--sub">mp3 · 9.2 mb</div>
                </div>
                <div className="file__more">
                  <i className="fa fa-ellipsis-v" aria-hidden="true" />
                </div>
              </div>
              <div className="file">
                <div className="file__img file--image">
                  <i className="fa fa-music" aria-hidden="true" />
                </div>
                <div className="file__name">
                  <div className="file__name--main">Franky Wah - Aftertime</div>
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
                  <div className="file__name--main">Franky Wah - Aftertime</div>
                  <div className="file__name--sub">mp3 · 9.2 mb</div>
                </div>
                <div className="file__more">
                  <i className="fa fa-ellipsis-v" aria-hidden="true" />
                </div>
              </div>
              <div className="file">
                <div className="file__img">
                  <i className="fa fa-music" aria-hidden="true" />
                </div>
                <div className="file__name">
                  <div className="file__name--main">Franky Wah - Aftertime</div>
                  <div className="file__name--sub">mp3 · 9.2 mb</div>
                </div>
                <div className="file__more">
                  <i className="fa fa-ellipsis-v" aria-hidden="true" />
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

export default Management;
