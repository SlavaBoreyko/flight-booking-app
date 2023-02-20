import React, { FC } from "react";
import s from "./DepDestItem.module.scss";
import { formatDuration, randomTime, date } from "../../../utils";
import { BoundsType } from "../../../types/data.types";

interface DepDestItemInterface {
  data: BoundsType;
}

const DepDestItem: FC<DepDestItemInterface> = ({ data }) => {
  if (!data) return null;
  return (
    <div className={s.container}>
      <div className={s.timeContainer} style={{ textAlign: "right" }}>
        <p>{data.departure.code}</p>
        <p className={s.timeBold}>{randomTime(data.departure.dateTime)}</p>
        <p>{date(data.departure.dateTime)}</p>
      </div>
      <div className={s.timeline}>
        <p>{formatDuration(data.duration)}</p>
        <div className={s.lineElement}></div>
      </div>
      <div className={s.timeContainer}>
        <p>{data.destination.code}</p>
        <p className={s.timeBold}>{randomTime(data.destination.dateTime)}</p>
        <p>{date(data.destination.dateTime)}</p>
      </div>
    </div>
  );
};

export default DepDestItem;
