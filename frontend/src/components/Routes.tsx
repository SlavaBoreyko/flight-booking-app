import { Route, Switch } from "react-router-dom";
import { FlightsPage } from "../pages/FlightsPage";
import { ConfirmationPage } from "../pages/ConfirmationPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights" exact>
        <FlightsPage />
      </Route>
      <Route path="/flights/booking-confirmation">
        <ConfirmationPage />
      </Route>
    </Switch>
  );
};

export default Routes;
