import React, { FC, useState } from "react";
import s from "./FligthCard.module.scss";
import BigButton from "../../Buttons/BigButton";
import DepDestItem from "../DepDestItem";
import Logo from "../../../assets/logo.png";
import { FlightType } from "../../../types/data.types";
import { currencySymbol } from "../../../constants/currencySymbol";
import LinkButton from "../../Buttons/LinkButton/LinkButton";
import FligthDetails from "../FligthDetails/FligthDetails";

interface FligthCardInterface {
  data: FlightType;
}

const FligthCard: FC<FligthCardInterface> = ({ data }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

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

  return (
    <>
      <div className={s.detailsBox} style={showDetailsStyle}>
        {DetailsComponent}
      </div>
      <div className={s.card}>
        <div className={s.main}>
          <div className={s.header}>
            <LinkButton
              title="Fluchtdetails"
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
                    <img src={Logo} alt="Airline Logo" />
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
          <BigButton title="Book flight" />
        </div>
      </div>
    </>
  );
};

export default FligthCard;
