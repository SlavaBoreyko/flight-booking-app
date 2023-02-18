import React, { FC } from "react";
import s from "./LinkButton.module.scss";
import { BtnProps } from "../../../types/button.types";

const LinkButton: FC<BtnProps> = ({ title, onClick }) => {
  return (
    <button className={s.linkStyle} onClick={onClick}>
      {title}
    </button>
  );
};

export default LinkButton;
