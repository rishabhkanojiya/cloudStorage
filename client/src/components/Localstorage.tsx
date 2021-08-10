import React, { Component } from "react";

interface Props {}
interface State {}

class Localstorage extends Component<Props, State> {
  state = {};

  render() {
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
            </div>
          </div>
        </div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default Localstorage;
