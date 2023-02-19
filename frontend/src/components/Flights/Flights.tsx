import FligthCard from "./FligthCard";
import s from "./Flights.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { FlightType } from "../../types/data.types";
import { apiFlights } from "../../api";
import { SortType, sortFlights } from "../../utils/sortFlights";
import { useState } from "react";
import { useFlightsSortSelect } from "../../hooks";
import Select from "../Inputs/Select/Select";

const Flights = () => {
  const { loading, error, data } = useFetch<FlightType[]>(apiFlights());
  const { optionsSortFlights, handleSelectSort, sortBy } =
    useFlightsSortSelect();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (data && data.length > 0) {
    const sortData = sortFlights(data, sortBy);
    return (
      <div className={s.listContainer}>
        <form>
          <Select
            id="sortFlights"
            label="Sort by "
            options={optionsSortFlights}
            onChange={handleSelectSort}
          />
        </form>
        {sortData.map((flight) => (
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
