import FligthCard from "./FligthCard";
import s from "./Flights.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { FlightType } from "../../types/data.types";
import { apiFlights } from "../api";

const Flights = () => {
  const { loading, error, data } = useFetch<FlightType[]>(apiFlights());

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (data && data.length > 0) {
    return (
      <div className={s.listContainer}>
        {data.map((flight) => (
          <div className={s.divMarginCenter} key={flight.uuid}>
            <FligthCard data={flight} />
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Flights;
