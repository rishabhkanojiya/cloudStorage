import React, { Component, Fragment } from "react";
import { History } from "history";
import { config } from "../constant/config";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Consume } from "../Context/Consumer";
import { ShowPopupContext } from "../Context";
import { PopUpContextType } from "../constant/types";

interface Props {
  history?: History;
  location: Location;
  ShowPopupData: PopUpContextType;
}
interface State {
  currRoute?: string;
}

class Menu extends Component<Props & State & RouteComponentProps> {
  state = {
    currRoute: config.routes.home,
  };

  componentDidMount() {
    const { location } = this.props;
    this.setState({ currRoute: location.pathname });
  }

  clickHandler = (isSpecial: boolean, name: string): void => {
    const { history, ShowPopupData } = this.props;

    if (!isSpecial) {
      history?.push(config.routes[name]);
      this.setState({ currRoute: config.routes[name] });
    } else {
      ShowPopupData.setShowPopup(true);
    }
  };

  renderMenuList = () => {
    const { currRoute } = this.state;
    const { clickHandler } = this;
    return config.routesClass.map(({ name, classN, isSpecial }, index) => {
      const actClass =
        currRoute === config.routes[name] && !isSpecial ? "active" : "";
      const specialClass = isSpecial ? "special" : "";
      return (
        <li
          key={index}
          className={`${actClass} ${specialClass}`}
          onClick={() => {
            clickHandler(isSpecial, name);
          }}
        >
          <i className={classN} aria-hidden="true" />
        </li>
      );
    });
  };
  render() {
    const { renderMenuList } = this;
    const { location } = this.props;

    if (location.pathname === config.routes.onBoard) {
      return <Fragment />;
    }
    return <ul className="menu">{renderMenuList()}</ul>;
  }
}

export default Consume(withRouter(Menu), [ShowPopupContext]);
