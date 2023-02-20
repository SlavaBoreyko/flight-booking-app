import s from "./Flights.module.scss";
import FlightCard from "./FlightCard";
import { Select } from "../shared/Inputs";
import ErrorServerPage from "../../pages/ErrorServerPage";
import SkeletonList from "./SkeletonList/SkeletonList";

import { api } from "../../api";
import { useFlightsSortSelect, useAxios } from "../../hooks";
import { sortFlights } from "../../api/sortFlights";

const Flights = () => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: api.flights.list,
    headers: {
      accept: "*/*",
    },
  });
  const { optionsSortFlights, handleSelectSort, sortBy } =
    useFlightsSortSelect();

  if (loading) {
    return <SkeletonList />;
  }
  if (error) {
    return <ErrorServerPage />;
  }
  if (response && response.data.length > 0) {
    const sortData = sortFlights(response.data, sortBy);
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
          <div className={s.divMargin} key={flight.uuid}>
            <FlightCard data={flight} />
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default Flights;
