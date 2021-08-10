import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Popup from "./components/Popup";
import { ShowPopupProvider } from "./Context/Provider";
import Routes from "./routes";
interface Props {}

const App = (props: Props) => {
  return (
    <ShowPopupProvider>
      <BrowserRouter>
        <Routes />
        <Menu />
        <Popup />
      </BrowserRouter>
    </ShowPopupProvider>
  );
};

export default App;
