import React, { FC } from "react";
import s from "./FligthDetails.module.scss";
import { useFetch } from "../../../hooks/useFetch";
import { DetailsType } from "../../../types/data.types";
import { apiDetails } from "../../../api";

interface FligthDetailsProps {
  id: string;
}

const FligthDetails: FC<FligthDetailsProps> = ({ id }) => {
  const { loading, error, data } = useFetch<DetailsType>(apiDetails(id));

  if (loading) {
    return <div className={s.detailsCard}>Loading...</div>;
  }
  if (error) {
    return <div className={s.detailsCard}>Error: {error}</div>;
  }

  if (data) {
    return (
      <div className={s.detailsCard}>
        <p>
          Remain Seats:{" "}
          <span>
            {data.remainingNumberOfSeats ? data.remainingNumberOfSeats : "--"}
          </span>
        </p>
        <p>
          Seat Pitch: <span>{data.seatPitch ? data.seatPitch : "--"}</span>
        </p>
        <p>
          Class: <span>{data.cabinClass ? data.cabinClass : "--"}</span>
        </p>
        {data.freeBaggageAllowed ? <p>Free Baggage </p> : null}
      </div>
    );
  }

  return null;
};

export default FligthDetails;
