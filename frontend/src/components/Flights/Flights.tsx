import { useEffect, useState } from "react";
import { FligthCard } from "./FligthCard";
import { useFetch } from "../../hooks/useFetch";
import { CurrencyType, FlightType } from "../../types/data.types";

const Flights = () => {
  const url = "http://localhost:3001/flights";
  const { loading, error, data } = useFetch<FlightType>(url);

  console.log(Object.values(CurrencyType));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    // return <div>Error: {error}</div>;
  }
  if (data) {
    return (
      <>
        {data.map((flight) => (
          <div style={{ margin: "2rem" }}>
            <FligthCard data={flight} />
          </div>
        ))}
      </>
    );
  }

  return null;
};

export default Flights;
