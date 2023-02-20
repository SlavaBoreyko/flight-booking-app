import React, { FC } from "react";
import s from "./FligthDetails.module.scss";
import { api } from "../../../api";
import { useAxios } from "../../../hooks";

interface FligthDetailsProps {
  id: string;
}

const FligthDetails: FC<FligthDetailsProps> = ({ id }) => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: api.flights.details(id),
    headers: {
      accept: "*/*",
    },
  });

  if (loading) {
    return <div className={s.detailsCard}>Loading...</div>;
  }
  if (error) {
    return <div className={s.detailsCard}>Error: {error.message}</div>;
  }

  if (response?.data) {
    const data = response.data;
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
