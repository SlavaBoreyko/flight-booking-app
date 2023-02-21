import React, { FC } from "react";
import { StyledDetails } from "./styles";
import { api } from "@/api";
import { useAxios } from "@/hooks";

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
    return <StyledDetails>Loading...</StyledDetails>;
  }
  if (error) {
    return <StyledDetails>Error: {error.message}</StyledDetails>;
  }
  if (response?.data) {
    const data = response.data;
    return (
      <StyledDetails>
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
      </StyledDetails>
    );
  }

  return null;
};

export default FligthDetails;
