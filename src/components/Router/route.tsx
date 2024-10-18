import { RouteObject } from "react-router-dom";
import Game from "../Game/Game";
import Main from "../Main/Main";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />
  },
  {
    path: "game/:mode",
    element: <Game />
  }
];
