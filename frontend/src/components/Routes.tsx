import { Redirect, Route, Switch } from "react-router-dom";
import Flights from "./Flights";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights" exact>
        <Flights />
      </Route>
      <Route path="/flights/booking-confirmation">
        <p>booking-confirmation</p>
      </Route>
    </Switch>
  );
};

export default Routes;
