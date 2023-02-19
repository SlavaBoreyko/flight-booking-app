import { SortType } from "../utils/sortFlights";

export const optionsSortFlights = [
  {
    value: SortType.PRICE_ASCENDING,
    // label: "Cheapest",
    label: "Price",
  },
  {
    value: SortType.DEPARTURE_TIME_ASCENDING,
    // label: "Earliest departure",
    label: "Departure time",
  },
  {
    value: SortType.FASTEST_BY_DURATION,
    // label: "Fastest",
    label: "Duration",
  },
];
