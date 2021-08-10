import { History } from "history";
import React, { Component, Fragment, Suspense } from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import { config } from "../constant/config";
import { routesConfig } from "../constant/routesCOnfig";
import {
  UserContextType,
  HomeContextType,
  LocalContextType,
} from "../constant/types";
import { HomeContext, LocalContext, UserContext } from "../Context";
import { Consume } from "../Context/Consumer";

interface Props {
  location: Location;
  history: History;
  userData: UserContextType;
  homeData: HomeContextType;
  localData: LocalContextType;
}

class Routes extends Component<Props & RouteComponentProps> {
  componentDidMount() {
    const { userData, homeData, localData } = this.props;
    userData.getUserData();
    homeData.getHomeData();
    localData.getLocalData();
  }

  render() {
    const { location, history } = this.props;

    let loaderMarkUp = (
      <div className="container">
        <div className="main_lhs">
          <div className="loader"></div>
        </div>
      </div>
    );
    const myRoutes = routesConfig.map((el, index) => {
      let Component = withRouter(el.component);
      let path = el.path;

      if (location.pathname === "/") {
        history.push(config.routes.onBoard);
        // return (
        //   <Route
        //     key={index}
        //     path={config.routes.home}
        //     render={() => (
        //       <Fragment>
        //         <Home />
        //       </Fragment>
        //     )}
        //   />
        // );
      }

      return (
        <Route
          key={index}
          path={path}
          render={() => (
            <Fragment>
              <Component />
            </Fragment>
          )}
        />
      );
    });
    return (
      <Suspense fallback={loaderMarkUp}>
        <Switch>
          {myRoutes}

          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default Consume(withRouter(Routes), [
  UserContext,
  HomeContext,
  LocalContext,
]);
