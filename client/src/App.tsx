import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Popup from "./components/Popup";
import {
  HomeProvider,
  LocalProvider,
  ShowPopupProvider,
  UserProvider,
} from "./Context/Provider";
import Routes from "./routes";
interface Props {}

const App = (props: Props) => {
  return (
    <ShowPopupProvider>
      <UserProvider>
        <HomeProvider>
          <LocalProvider>
            <BrowserRouter>
              <Routes />
              <Menu />
              <Popup />
            </BrowserRouter>
          </LocalProvider>
        </HomeProvider>
      </UserProvider>
    </ShowPopupProvider>
  );
};

export default App;
