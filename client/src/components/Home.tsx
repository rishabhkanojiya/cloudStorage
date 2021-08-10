import React, { Component } from "react";
interface Props {}
interface State {}

class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="home_container">
        <div className="main_lhs">
          <div className="main_lhs__hero">
            <h1>Hello Jessie,</h1>
            <p>at the moment you have</p>
            <p>
              <em>32,5 GB </em>
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
            <div className="folder">
              <div className="card">
                <div className="left">
                  <div className="left__title">The next big thing</div>
                  <div className="left_det">12 f · 2.1 gb</div>
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
              <div className="card">
                <div className="left">
                  <div className="left__title">The next big thing</div>
                  <div className="left_det">12 f · 2.1 gb</div>
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
              <div className="card">
                <div className="left">
                  <div className="left__title">The next big thing</div>
                  <div className="left_det">12 f · 2.1 gb</div>
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
              <div className="card">
                <div className="left">
                  <div className="left__title">The next big thing</div>
                  <div className="left_det">12 f · 2.1 gb</div>
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
            </div>
          </div>
        </div>
        <div className="main_rhs" />
      </div>
    );
  }
}

export default Home;
