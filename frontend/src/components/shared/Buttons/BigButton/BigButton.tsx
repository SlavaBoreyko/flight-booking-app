import React, { FC, useEffect, useState } from "react";
import s from "./BigButton.module.scss";
import { BtnProps } from "../../../../types/button.types";

export const BigButton: FC<BtnProps> = ({ title, onClick, loading }) => {
  const [btnTitle, setBtnTitle] = useState<string>(title);

  useEffect(() => {
    if (loading) {
      setBtnTitle("  ...  ");
    } else {
      setBtnTitle(title);
    }
  }, [title, loading]);

  return (
    <button className={s.btn} onClick={onClick}>
      {btnTitle}
    </button>
  );
};
