import React, { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import s from "./FlightCard.module.scss";

import FligthDetails from "@/components/Flights/FligthDetails";
import Bounds from "@/components/Flights/Bounds";
import PriceButtonBox from "@/components/Flights/PriceButtonBox";
import { LinkButton } from "@/components/shared/Buttons";

import { api } from "@/api";
import { useAxios } from "@/hooks";

import { showDetailsStyle, showErrorBoxStyle } from "./utils";
import { FlightType } from "@/types/data.types";

interface FlightCardInterface {
  data: FlightType;
}

const FlightCard: FC<FlightCardInterface> = ({ data }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const { response, loading, error, sendData } = useAxios({
    method: "post",
    url: api.flights.list,
    headers: {
      accept: "*/*",
    },
    data: JSON.stringify({
      uuid: data.uuid,
    }),
  });

  useEffect(() => {
    if (response?.status === 200)
      history.push(`${pathname}/booking-confirmation`);
  }, [response]);

  const handleBooking = () => {
    sendData();
  };

  const DetailsComponent = showDetails ? (
    <FligthDetails id={data.uuid} />
  ) : null;
  const showStyle = showDetailsStyle(showDetails);
  const showErrorStyle = showErrorBoxStyle(error ? true : false);

  return (
    <>
      {/* >>> DETAILS >>> */}
      <div className={s.detailsBox} style={showStyle}>
        {DetailsComponent}
      </div>
      <div className={s.card}>
        {/* >>> BOUNDS >>> */}
        <div className={s.main}>
          <div className={s.header}>
            <LinkButton
              title="Vluchtdetails"
              onClick={() => setShowDetails((prev) => !prev)}
            />
          </div>
          <Bounds bounds={data.bounds} airlineCode={data.airlineCode} />
        </div>

        {/* >>> PRICE & BUTTON >>> */}
        <PriceButtonBox
          price={data.price}
          btnTitle="Book flight"
          onClick={handleBooking}
          loading={loading}
        />
      </div>
      {/* >>> ERROR MESSAGE >>> */}
      <div className={s.errorBox} style={showErrorStyle}>
        {error ? "Error. Please try press button again." : null}
      </div>
    </>
  );
};

export default FlightCard;
