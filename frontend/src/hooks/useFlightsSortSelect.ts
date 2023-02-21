import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { SortType } from "@/api";
import { optionsSortFlights } from "@/constants";

export const useFlightsSortSelect = () => {
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const sortQuery = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState<SortType>(sortQuery as SortType);

  useEffect(() => {
    const params = new URLSearchParams();
    if (sortBy) {
      params.append("sortBy", sortBy);
    } else {
      params.delete("sortBy");
    }
    history.push({ search: params.toString() });
  }, [sortBy, history]);

  const handleSelectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortType);
  };

  return { optionsSortFlights, handleSelectSort, sortBy };
};
