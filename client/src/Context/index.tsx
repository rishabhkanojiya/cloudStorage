import { createContext } from "react";

export const ShowPopupContext = createContext(null);
ShowPopupContext.displayName = "ShowPopupData";

export const UserContext = createContext(null);
UserContext.displayName = "userData";

export const HomeContext = createContext(null);
HomeContext.displayName = "homeData";

export const LocalContext = createContext(null);
LocalContext.displayName = "localData";
