import React from "react";
import s from "./FligthCard.module.scss";
import { BigButton } from "../../Buttons/BigButton/BigButton";
import { DepDestItem } from "../DepDestItem";
import Logo from "../../../assets/logo.png";

export const FligthCard = () => {
  return (
    <div className={s.card}>
      <ul className={s.boundInfo}>
        <li className={s.paddingBox}>
          <img src={Logo} alt="Airline Logo" />
          <DepDestItem />
        </li>
        <hr />
        <li className={s.paddingBox}>
          <img src={Logo} alt="Airline Logo" />
          <DepDestItem />
        </li>
      </ul>

      <div className={s.priceAndButton}>
        <p className={s.priceFont}>
          $ 184,59 <span>p.p.</span>
        </p>
        <BigButton title="Book flight" />
      </div>
    </div>
  );
};
