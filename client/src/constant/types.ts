import { HomeResp, LocalResp, UserResp } from "./respType";

export interface PopUpContextType {
  showPopup: Boolean;
  setShowPopup: (val: Boolean) => void;
}

export interface UserContextType {
  data: {};
  setUser: (data: UserResp) => void;
  getUserData: () => void;
}

export interface HomeContextType {
  data: {};
  setHome: (data: HomeResp) => void;
  getHomeData: () => void;
}

export interface LocalContextType {
  data: {};
  setLocal: (data: LocalResp) => void;
  getLocalData: () => void;
}
