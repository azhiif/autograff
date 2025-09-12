import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import JetComingSoon from "../pages/home/components/JetComingSoon";
import RealEstateComingSoon from "../pages/home/components/RealEstateComingSoon";
import WatchComingSoon from "../pages/home/components/WatchComingSoon";
import YatchComingSoon from "../pages/home/components/YatchComingSoon";
import ArtComingSoon from "../pages/home/components/ArtComingSoon";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/coming-soon/Art",
    element: <ArtComingSoon />,
  },
  {
    path: "/coming-soon/jets",
    element: <JetComingSoon />,
  },
  {
    path: "/coming-soon/Real-Estate",
    element: <RealEstateComingSoon />,
  },
  {
    path: "/coming-soon/Watches",
    element: <WatchComingSoon />,
  },
  {
    path: "/coming-soon/Yachts",
    element: <YatchComingSoon />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;