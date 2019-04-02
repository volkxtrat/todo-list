import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routesApp from "./configApp";
import routes from '../routes';
import Workspace from "../../components/Workspace/Workspace";

export default function RoutesApp({ ...props }) {
  return (
    <Switch>
      {routesApp.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={routeProps => (
              <Workspace>
                <route.component {...props} {...routeProps} />
              </Workspace>
            )}
          />
        );
      })}
      <Redirect from={routes.home} to={routes.inbox} />
    </Switch>
  );
}
