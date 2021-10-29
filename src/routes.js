// pages

import Home from "./pages/screen0/index";
import About from "./pages/screen1";
import Learning from "./pages/screen2/index";
import Reports from "./pages/screen3/index";
import Rewards from "./pages/screen4/index";
import Settings from "./pages/screen5/index";

// paths
import { Paths } from "./Constants";
const publicPaths = [
  { id: 0, path: Paths.home, component: Home, exact: true },
  { id: 1, path: Paths.about, component: About, exact: true },
  { id: 2, path: Paths.learning, component: Learning, exact: true },
  { id: 3, path: Paths.reports, component: Reports, exact: true },
  { id: 4, path: Paths.rewards, component: Rewards, exact: true },
  { id: 5, path: Paths.settings, component: Settings, exact: true },
];

export { publicPaths };
