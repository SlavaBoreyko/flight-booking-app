import ConfirmationPage from "@/pages/ConfirmationPage";
import Error404 from "@/pages/Error404";
import FlightsPage from "@/pages/FlightsPage";
import { Redirect } from "react-router-dom";

type NavRoute = {
  path: string;
  element: JSX.Element;
};
type NavRoutes = Record<string, NavRoute>;

export const navRoutes: NavRoutes = {
  flights: {
    path: "/flights",
    element: <FlightsPage />,
  },
  confirmation: {
    path: "/flights/booking-confirmation",
    element: <ConfirmationPage />,
  },
  error404: {
    path: "*",
    // element: <Error404 />,
    element: <Redirect to="/flights" />,
  },
};
