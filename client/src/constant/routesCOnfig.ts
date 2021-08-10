import {
  Home,
  Localstorage,
  Notifications,
  Management,
  OnBoard,
  Profile,
} from "../routes/routesLazy";
import { config } from "./config";

export const routesConfig = [
  {
    name: "OnBoard",
    path: config.routes.onBoard,
    component: OnBoard,
  },
  {
    name: "Home",
    path: config.routes.home,
    component: Home,
  },
  {
    name: "Localstorage",
    path: config.routes.localstorage,
    component: Localstorage,
  },
  {
    name: "Management",
    path: config.routes.management,
    component: Management,
  },
  {
    name: "Notifications",
    path: config.routes.notifications,
    component: Notifications,
  },
  {
    name: "Profile",
    path: config.routes.profile,
    component: Profile,
  },
];
