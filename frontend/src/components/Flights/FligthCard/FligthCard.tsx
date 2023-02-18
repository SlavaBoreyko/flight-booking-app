import React, { FC } from "react";
import s from "./FligthCard.module.scss";
import { BigButton } from "../../Buttons/BigButton/BigButton";
import { DepDestItem } from "../DepDestItem";
import Logo from "../../../assets/logo.png";
import { FlightType } from "../../../types/data.types";
import { currencySymbol } from "../../../constants/currencySymbol";

interface FligthCardInterface {
  data: FlightType;
}

export const FligthCard: FC<FligthCardInterface> = ({ data }) => {
  return (
    <div className={s.card}>
      <ul className={s.boundInfo}>
        {data.bounds.map((item, index) => {
          let line = null;
          if (index > 0) {
            line = <hr />;
          }
          return (
            <>
              {line}
              <li className={s.paddingBox} key={index}>
                <img src={Logo} alt="Airline Logo" />
                <DepDestItem data={item} />
              </li>
            </>
          );
        })}
      </ul>
      <div className={s.priceAndButton}>
        <p className={s.priceFont}>
          {`${currencySymbol[data.price.currency]} ${data.price.amount}`}
          <span> p.p.</span>
        </p>
        <BigButton title="Book flight" />
      </div>
    </div>
  );
};
