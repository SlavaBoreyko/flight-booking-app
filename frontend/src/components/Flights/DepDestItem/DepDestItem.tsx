import React, { FC } from "react";
import s from "./DepDestItem.module.scss";
import { BoundsType } from "../../../types/data.types";
import { formatDuration } from "../../../utils/duration";
import { time } from "../../../utils/time";
import { date } from "../../../utils/date";

interface DepDestItemInterface {
  data: BoundsType;
}

export const DepDestItem: FC<DepDestItemInterface> = ({ data }) => {
  if (!data) return null;
  return (
    <div className={s.container}>
      <div className={s.timeContainer} style={{ textAlign: "right" }}>
        <p>{data.departure.code}</p>
        <p className={s.timeBold}>{time(data.departure.dateTime)}</p>
        <p>{date(data.departure.dateTime)}</p>
      </div>
      <div className={s.timeline}>
        <p>{formatDuration(data.duration)}</p>
        <div className={s.lineElement}></div>
      </div>
      <div className={s.timeContainer}>
        <p>{data.destination.code}</p>
        <p className={s.timeBold}>{time(data.destination.dateTime)}</p>
        <p>{date(data.destination.dateTime)}</p>
      </div>
    </div>
  );
};
