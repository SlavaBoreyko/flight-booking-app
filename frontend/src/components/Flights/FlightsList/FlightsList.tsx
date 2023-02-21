import { StyledList, StyledMargin } from "./styles";
import FlightCard from "@/components/Flights/FlightCard";
import SkeletonList from "@/components/Flights/SkeletonList";
import ErrorServerPage from "@/pages/ErrorServerPage";
import { Select } from "@/components/shared/Inputs";

import { api, sortFlights } from "@/api";
import { useFlightsSortSelect, useAxios } from "@/hooks";
import { FlightType } from "@/types/data.types";
import { fixedZeroBug } from "@/utils";

const FlightsList = () => {
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
      <StyledList>
        <form>
          <Select
            id="sortFlights"
            label="Sort by "
            options={optionsSortFlights}
            sortQuery={sortBy}
            onChange={handleSelectSort}
          />
        </form>
        {sortData.map((flight) => (
          <StyledMargin key={flight.uuid}>
            <FlightCard data={flight} />
          </StyledMargin>
        ))}
      </StyledList>
    );
  }
  return null;
};

export default FlightsList;
