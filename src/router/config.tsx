import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ComingSoon from "../pages/home/components/ComingSoon";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoon />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;