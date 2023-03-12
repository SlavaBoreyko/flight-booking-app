import React, { FC } from "react";
import { StyledContainer, StyledDuration, StyledLine } from "./styles";
import { formatDuration } from "@/utils";
import { BoundsType } from "@/types/data.types";
import CodeTimeData from "../CodeTimeData/CodeTimeData";

interface DepDestItemInterface {
  data: BoundsType;
}

const DepDestItem: FC<DepDestItemInterface> = ({ data }) => {
  if (!data) return null;
  return (
    <StyledContainer>
      <CodeTimeData
        code={data.departure.code}
        dateTime={data.departure.dateTime}
        textAlign="right"
      />
      <StyledDuration>
        <p>{formatDuration(data.duration)}</p>
        <StyledLine />
      </StyledDuration>
      <CodeTimeData
        code={data.destination.code}
        dateTime={data.destination.dateTime}
      />
    </StyledContainer>
  );
};

export default DepDestItem;
