import React, { FC, useEffect, useState } from "react";
import s from "./FligthCard.module.scss";

import { BigButton, LinkButton } from "../../shared/Buttons";

import DepDestItem from "../DepDestItem";
import { FlightType } from "../../../types/data.types";
import { currencySymbol } from "../../../constants/currencySymbol";
import FligthDetails from "../FligthDetails/FligthDetails";
import { api } from "../../../api";
import LogoError from "../../../assets/LogoError.png";
import { useAxios } from "../../../hooks";
import { useHistory, useLocation } from "react-router-dom";

interface FligthCardInterface {
  data: FlightType;
}

const FligthCard: FC<FligthCardInterface> = ({ data }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [btnTitle, setBtnTitle] = useState<string>("Book flight");
  const [errorBooking, setErrorBooking] = useState<string | null>(null);
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
    if (loading) {
      setBtnTitle("  ...  ");
    } else {
      setBtnTitle("Book flight");
    }
  }, [loading]);

  useEffect(() => {
    if (error) {
      setErrorBooking(error.message);
    } else {
      setErrorBooking(null);
    }
  }, [error]);

  useEffect(() => {
    if (response?.status === 200)
      history.push(`${pathname}/booking-confirmation`);
  }, [response]);

  const showDetailsStyle = showDetails
    ? {
        height: "4rem",
        opacity: "1",
      }
    : {
        height: "0",
        opacity: "0",
      };

  const DetailsComponent = showDetails ? (
    <FligthDetails id={data.uuid} />
  ) : null;

  const Logo = (
    <img
      src={api.flights.airlinesLogo(data.airlineCode)}
      alt={`Airline ${data.airlineCode} Logo`}
      onError={(event: React.ChangeEvent<HTMLImageElement>) =>
        (event.target.src = LogoError)
      }
    />
  );

  return (
    <>
      <div className={s.detailsBox} style={showDetailsStyle}>
        {DetailsComponent}
      </div>
      <div className={s.card}>
        <div className={s.main}>
          <div className={s.header}>
            <LinkButton
              title="Vluchtdetails"
              onClick={() => setShowDetails((prev) => !prev)}
            />
          </div>
          <ul className={s.boundInfo}>
            {data.bounds.map((item, index) => {
              let line = null;
              let paddingTop = { paddingTop: "0" };
              if (index > 0) {
                line = <hr />;
                paddingTop = { paddingTop: "2rem" };
              }
              return (
                <div
                  key={`${item.departure.name}-${item.departure.dateTime}`}
                  style={{ width: "100%" }}
                >
                  {line}
                  <li className={s.paddingBox} style={paddingTop}>
                    {Logo}
                    <DepDestItem data={item} />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={s.priceAndButton}>
          <p className={s.priceFont}>
            {`${currencySymbol[data.price.currency]} ${data.price.amount}`}
            <span> p.p.</span>
          </p>
          <BigButton
            title={btnTitle}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              sendData();
            }}
          />
          {errorBooking ? <p>{errorBooking}</p> : null}
        </div>
      </div>
    </>
  );
};

export default FligthCard;
