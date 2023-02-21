import React, { FC } from "react";
import {
  StyledContainer,
  StyledTime,
  StyledTimeBold,
  StyledDuration,
  StyledLine,
} from "./styles";
import { formatDuration, date, hourAndMin } from "@/utils";
import { BoundsType } from "@/types/data.types";

interface DepDestItemInterface {
  data: BoundsType;
}

const DepDestItem: FC<DepDestItemInterface> = ({ data }) => {
  if (!data) return null;
  return (
    <StyledContainer>
      <StyledTime style={{ textAlign: "right" }}>
        <p>{data.departure.code}</p>
        <StyledTimeBold>{hourAndMin(data.departure.dateTime)}</StyledTimeBold>
        <p>{date(data.departure.dateTime)}</p>
      </StyledTime>
      <StyledDuration>
        <p>{formatDuration(data.duration)}</p>
        <StyledLine />
      </StyledDuration>
      <StyledTime>
        <p>{data.destination.code}</p>
        <StyledTimeBold>{hourAndMin(data.destination.dateTime)}</StyledTimeBold>
        <p>{date(data.destination.dateTime)}</p>
      </StyledTime>
    </StyledContainer>
  );
};

export default DepDestItem;
