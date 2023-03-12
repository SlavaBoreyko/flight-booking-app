import React, { FC } from "react";
import { StyledBounds, StyledPadding } from "./styles";

import { BoundsType } from "@/types/data.types";
import { lineHrStyle } from "@/components/flights/Bounds/utils";
import AirlinesLogo from "@/components/flights/AirlinesLogo";
import DepDestItem from "@/components/flights/DepDestItem";

interface BoundsProps {
  bounds: BoundsType[];
  airlineCode: string;
}

const Bounds: FC<BoundsProps> = ({ bounds, airlineCode }) => {
  return (
    <StyledBounds>
      {bounds.map((item, index) => {
        const { line, paddingTop } = lineHrStyle(index);
        return (
          <div
            key={`${item.departure.name}-${item.departure.dateTime}`}
            style={{ width: "100%" }}
          >
            {line}
            <StyledPadding style={paddingTop}>
              <AirlinesLogo airlineCode={airlineCode} />
              <DepDestItem data={item} />
            </StyledPadding>
          </div>
        );
      })}
    </StyledBounds>
  );
};

export default Bounds;
