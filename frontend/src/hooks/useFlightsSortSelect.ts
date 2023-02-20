import React, { useState } from "react";
import { SortType } from "../api/sortFlights";
import { optionsSortFlights } from "../constants/optionsSortFlights";

export const useFlightsSortSelect = () => {
  const [sortBy, setSortBy] = useState<SortType>(SortType.PRICE_ASCENDING);

  const handleSelectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (event.target.value === SortType.PRICE_ASCENDING) {
      setSortBy(SortType.PRICE_ASCENDING);
    }
    if (event.target.value === SortType.DEPARTURE_TIME_ASCENDING) {
      setSortBy(SortType.DEPARTURE_TIME_ASCENDING);
    }
    if (event.target.value === SortType.FASTEST_BY_DURATION) {
      setSortBy(SortType.FASTEST_BY_DURATION);
    }
  };

  return { optionsSortFlights, handleSelectSort, sortBy };
};
