import React, { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
  StyledCard,
  StyledCardHeader,
  StyledCardMain,
  StyledDetailsBox,
  StyledErrorBox,
} from "./styles";

import FligthDetails from "@/components/flights/FligthDetails";
import Bounds from "@/components/flights/Bounds";
import PriceButtonBox from "@/components/flights/PriceBtnBox";
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
      <StyledDetailsBox style={showStyle}>{DetailsComponent}</StyledDetailsBox>
      <StyledCard>
        {/* >>> BOUNDS >>> */}
        <StyledCardMain>
          <StyledCardHeader>
            <LinkButton
              title="Vluchtdetails"
              onClick={() => setShowDetails((prev) => !prev)}
            />
          </StyledCardHeader>
          <Bounds bounds={data.bounds} airlineCode={data.airlineCode} />
        </StyledCardMain>

        {/* >>> PRICE & BUTTON >>> */}
        <PriceButtonBox
          price={data.price}
          btnTitle="Book flight"
          onClick={handleBooking}
          loading={loading}
        />
      </StyledCard>
      {/* >>> ERROR MESSAGE >>> */}
      <StyledErrorBox style={showErrorStyle}>
        {error ? "Error. Please try press button again." : null}
      </StyledErrorBox>
    </>
  );
};

export default FlightCard;
