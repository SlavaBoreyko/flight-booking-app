import { BoundsType, FlightType } from "@/types/data.types";
import { randomTime } from "./randomTime";

export const fixedZeroBug = (data: FlightType[]) => {
  data.forEach((item) =>
    item.bounds.forEach((bound: BoundsType) => {
      bound.departure.dateTime = randomTime(bound.departure.dateTime);
      bound.destination.dateTime = randomTime(bound.destination.dateTime);
    })
  );
  return data;
};
