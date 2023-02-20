import FligthCard from "./FligthCard";
import s from "./Flights.module.scss";
import { api } from "../../api";
import { sortFlights } from "../../utils/sortFlights";
import { useFlightsSortSelect } from "../../hooks";
import { Select } from "../shared/Inputs";
import { useAxios } from "../../hooks";
import { useHistory } from "react-router-dom";
import { CenterFlex } from "../shared/Containers/CenterFlex";
import { Message } from "../shared/Messages";
import { BigButton } from "../shared/Buttons";

const Flights = () => {
  const history = useHistory();
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
    return <div>Loading...</div>;
  }
  if (error) {
    // return <div>Error: {error.message}</div>;

    return (
      <div style={{ height: "100vh" }}>
        <CenterFlex>
          <Message title="Error server" message="Please refresh a page." />
          <BigButton
            title="Refresh page"
            onClick={() => window.location.reload()}
          />
        </CenterFlex>
      </div>
    );
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
