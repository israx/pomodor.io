import React from "react";
import { Switch, Route } from "react-router-dom";
import { publicPaths } from "../routes";
import NotFound from "./NotFound";

const RouterConfig = () => (
  <Switch>
    {publicPaths.map((path) => (
      <Route
        key={path.id}
        path={path.path}
        exact={path.exact}
        component={path.component}
      />
    ))}
    <Route component={NotFound}/>
  </Switch>
);

export default RouterConfig;
