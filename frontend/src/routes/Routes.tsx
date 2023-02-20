import { Route, Switch } from "react-router-dom";
import { navRoutes } from "./navRoutes";

const Routes = () => {
  return (
    <Switch>
      {Object.values(navRoutes).map((route) => (
        <Route key={route.path} path={route.path} exact>
          {route.element}
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
