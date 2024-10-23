import About from "../pages/About/About";
import Dashborad from "../pages/Dashborad";
import { RoutesI } from "./route";

export const routes: RoutesI[] = [
  {
    path: "",
    element: Dashborad,
  },
  {
    path: "about",
    element: About,
  },
];
