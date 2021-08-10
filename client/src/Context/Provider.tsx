import React, { useState } from "react";
import { HomeContext, LocalContext, ShowPopupContext, UserContext } from ".";
import axios from "axios";
import { homeApi, localApi, userApi } from "../constant/apiUrls";

export const ShowPopupProvider = (props) => {
  let [showPopup, setShowPopup] = useState(false);

  return (
    <ShowPopupContext.Provider
      value={{
        showPopup,
        setShowPopup,
      }}
    >
      {props.children}
    </ShowPopupContext.Provider>
  );
};

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
    const data = await axios.get(userApi);
    setUser(data.data);
  };

  return (
    <UserContext.Provider
      value={{
        data: user,
        setUser,
        getUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const HomeProvider = (props) => {
  const [home, setHome] = useState(null);

  const getHomeData = async () => {
    const data = await axios.get(homeApi);
    setHome(data.data);
  };

  return (
    <HomeContext.Provider
      value={{
        data: home,
        setHome,
        getHomeData,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export const LocalProvider = (props) => {
  const [local, setLocal] = useState(null);

  const getLocalData = async () => {
    const data = await axios.get(localApi);
    setLocal(data.data);
  };

  return (
    <LocalContext.Provider
      value={{
        data: local,
        setLocal,
        getLocalData,
      }}
    >
      {props.children}
    </LocalContext.Provider>
  );
};
