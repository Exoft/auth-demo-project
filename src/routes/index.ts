import Home from "../pages/Home";
import Login from "../pages/Login";
import { RouteData } from "../types/app.types";

const routes: RouteData[] = [
  {
    path: "/",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/home",
    component: Home,
    isPrivate: true,
  },
];

export default routes;
