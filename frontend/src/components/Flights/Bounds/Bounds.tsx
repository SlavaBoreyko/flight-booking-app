import React, { FC } from "react";
import s from "./Bounds.module.scss";

import { BoundsType } from "@/types/data.types";
import { lineHrStyle } from "@/components/Flights/FlightCard/utils";
import AirlinesLogo from "@/components/Flights/AirlinesLogo";
import DepDestItem from "@/components/Flights/DepDestItem";

interface BoundsProps {
  bounds: BoundsType[];
  airlineCode: string;
}

const Bounds: FC<BoundsProps> = ({ bounds, airlineCode }) => {
  return (
    <ul className={s.boundInfo}>
      {bounds.map((item, index) => {
        const { line, paddingTop } = lineHrStyle(index);
        return (
          <div
            key={`${item.departure.name}-${item.departure.dateTime}`}
            style={{ width: "100%" }}
          >
            {line}
            <li className={s.paddingBox} style={paddingTop}>
              <AirlinesLogo airlineCode={airlineCode} />
              <DepDestItem data={item} />
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Bounds;
