import React, { FC } from "react";
import s from "./BigButton.module.scss";
import { BtnProps } from "../../../../types/button.types";

export const BigButton: FC<BtnProps> = ({ title, onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {title}
    </button>
  );
};
