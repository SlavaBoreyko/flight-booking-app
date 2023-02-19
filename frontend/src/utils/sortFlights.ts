import { FlightType } from "../types/data.types";
import { parse, toSeconds } from "iso8601-duration";

export enum SortType {
  PRICE_ASCENDING = "PriceAscending",
  PRICE_DESCENDING = "PriceDescending",
  DEPARTURE_TIME_ASCENDING = "DepartureTimeAscending",
  DEPARTURE_TIME_DESCENDING = "DepartureTimeDescending",
  FASTEST_BY_DURATION = "FastestByDuration",
}

export const sortFlights = (data: FlightType[], sortType: SortType) => {
  switch (sortType) {
    case SortType.PRICE_ASCENDING:
      return data.sort((a, b) => a.price.amount - b.price.amount);
    case SortType.PRICE_DESCENDING:
      return data.sort((a, b) => b.price.amount - a.price.amount);
    case SortType.DEPARTURE_TIME_ASCENDING:
      return data.sort(
        (a, b) =>
          Date.parse(a.bounds[0].departure.dateTime) -
          Date.parse(b.bounds[0].departure.dateTime)
      );
    case SortType.DEPARTURE_TIME_DESCENDING:
      return data.sort(
        (a, b) =>
          Date.parse(b.bounds[0].departure.dateTime) -
          Date.parse(a.bounds[0].departure.dateTime)
      );
    case SortType.FASTEST_BY_DURATION:
      return data.sort(
        (a, b) =>
          toSeconds(parse(a.bounds[0].duration)) -
          toSeconds(parse(b.bounds[0].duration))
      );
    default:
      return data;
  }
};
