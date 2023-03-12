import React, { FC } from "react";
import { StyledDetails } from "./styles";
import { api } from "@/api";
import { useAxios } from "@/hooks";
import { OptionalData } from "./OptionalData";

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
    return (
      <StyledDetails>
        <OptionalData data={response.data} />
      </StyledDetails>
    );
  }

  return null;
};

export default FligthDetails;
