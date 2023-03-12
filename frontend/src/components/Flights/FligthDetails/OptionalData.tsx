import { DetailsType } from "@/types/data.types";
import { FC } from "react";

interface OptionalDataProps {
  data: DetailsType;
}

export const OptionalData: FC<OptionalDataProps> = ({ data }) => {
  const OptionalRemainSeats = data.remainingNumberOfSeats ? (
    <p>
      Remain Seats: <span>{data.remainingNumberOfSeats}</span>
    </p>
  ) : null;
  const OptionalSeatPitch = data.seatPitch ? (
    <p>
      Seat Pitch: <span>{data.seatPitch}</span>
    </p>
  ) : null;
  const OptionalClass = data.cabinClass ? (
    <p>
      Class: <span>{data.cabinClass}</span>
    </p>
  ) : null;

  const OptionalFreeBaggage = data.freeBaggageAllowed ? (
    <p>Free Baggage </p>
  ) : null;

  return (
    <>
      {OptionalRemainSeats}
      {OptionalSeatPitch}
      {OptionalClass}
      {OptionalFreeBaggage}
    </>
  );
};
