import React from "react";
import s from "./DepDestItem.module.scss";

export const DepDestItem = () => {
  return (
    <div className={s.container}>
      <div className={s.timeContainer} style={{ textAlign: "right" }}>
        <p>AMS</p>
        <p className={s.timeBold}>20:35</p>
        <p>vri 04 feb</p>
      </div>
      <div className={s.timeline}>
        <p>2u 55m</p>
        <div className={s.lineElement}></div>
      </div>
      <div className={s.timeContainer}>
        <p>AMS</p>
        <p className={s.timeBold}>20:35</p>
        <p>vri 04 feb</p>
      </div>
    </div>
  );
};
