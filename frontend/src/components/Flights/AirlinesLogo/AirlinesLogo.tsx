import React from "react";
import { api } from "../../../api";
import LogoError from "../../../assets/LogoError.png";

const AirlinesLogo = ({ airlineCode }: { airlineCode: string }) => {
  return (
    <img
      src={api.flights.airlinesLogo(airlineCode)}
      alt={`Airline ${airlineCode} Logo`}
      onError={(event: React.ChangeEvent<HTMLImageElement>) =>
        (event.target.src = LogoError)
      }
    />
  );
};

export default AirlinesLogo;
