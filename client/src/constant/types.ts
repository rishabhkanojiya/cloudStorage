import { Home, HomeResp, Local, LocalResp, User, UserResp } from "./respType";

export interface PopUpContextType {
  showPopup: Boolean;
  setShowPopup: (val: Boolean) => void;
}

export interface UserContextType {
  data: User;
  setUser: (data: UserResp) => void;
  getUserData: () => void;
}

export interface HomeContextType {
  data: Home[];
  setHome: (data: HomeResp) => void;
  getHomeData: () => void;
}

export interface LocalContextType {
  data: Local[];
  setLocal: (data: LocalResp) => void;
  getLocalData: () => void;
}
