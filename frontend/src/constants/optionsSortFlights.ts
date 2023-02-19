import { SortType } from "../utils/sortFlights";

export const optionsSortFlights = [
  {
    value: SortType.PRICE_ASCENDING,
    label: "Cheapest",
  },
  {
    value: SortType.DEPARTURE_TIME_ASCENDING,
    label: "Earliest departure",
  },
  {
    value: SortType.FASTEST_BY_DURATION,
    label: "Fastest",
  },
];
