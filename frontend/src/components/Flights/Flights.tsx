import FligthCard from "./FligthCard";
import s from "./Flights.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { CurrencyType, FlightType } from "../../types/data.types";

const Flights = () => {
  const url = "http://localhost:3001/flights";
  const { loading, error, data } = useFetch<FlightType[]>(url);

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
