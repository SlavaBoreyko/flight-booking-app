import React, { FC } from "react";
import s from "./BigButton.module.scss";

export interface BtnProps {
  title: string;
  onClick?: () => void;
}

const BigButton: FC<BtnProps> = ({ title, onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default BigButton;
