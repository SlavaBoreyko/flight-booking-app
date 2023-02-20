import { SortType } from "../api/sortFlights";

export const optionsSortFlights = [
  {
    value: SortType.PRICE_ASCENDING,
    label: "Price",
  },
  {
    value: SortType.DEPARTURE_TIME_ASCENDING,
    label: "Departure time",
  },
  {
    value: SortType.FASTEST_BY_DURATION,
    label: "Duration",
  },
];
