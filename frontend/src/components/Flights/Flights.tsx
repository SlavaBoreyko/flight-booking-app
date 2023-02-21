import s from "./Flights.module.scss";
import FlightCard from "@/components/Flights/FlightCard";
import SkeletonList from "@/components/Flights/SkeletonList";
import ErrorServerPage from "@/pages/ErrorServerPage";
import { Select } from "@/components/shared/Inputs";

import { api, sortFlights } from "@/api";
import { useFlightsSortSelect, useAxios } from "@/hooks";
import { FlightType } from "@/types/data.types";
import { fixedZeroBug } from "@/utils";

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
    const fixedData = fixedZeroBug(response.data as FlightType[]);
    const sortData = sortFlights(fixedData, sortBy);

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
