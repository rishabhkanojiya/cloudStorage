import { lazy } from "react";

export const OnBoard = lazy(
  () => import(/* webpackChunkName: 'Prediction' */ "../screens/OnBoard")
);
export const Home = lazy(
  () => import(/* webpackChunkName: 'Prediction' */ "../screens/Home")
);
export const Localstorage = lazy(
  () => import(/* webpackChunkName: 'Prediction' */ "../screens/Localstorage")
);
export const Management = lazy(
  () => import(/* webpackChunkName: 'Prediction' */ "../screens/Management")
);
export const Notifications = lazy(
  () => import(/* webpackChunkName: 'Prediction' */ "../screens/Notifications")
);

export const Profile = lazy(
  () => import(/* webpackChunkName: 'Prediction' */ "../screens/Profile")
);
