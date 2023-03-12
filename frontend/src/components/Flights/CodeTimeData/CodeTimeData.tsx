import React, { FC } from "react";
import { StyledTime, StyledTimeBold } from "./styles";
import { date, hourAndMin } from "@/utils";

interface CodeTimeDataProps {
  code: string;
  dateTime: string;
  textAlign?: "left" | "right" | "center";
}

const CodeTimeData: FC<CodeTimeDataProps> = ({
  code,
  dateTime,
  textAlign = "left",
}) => {
  return (
    <StyledTime style={{ textAlign: textAlign }}>
      <p>{code}</p>
      <StyledTimeBold>{hourAndMin(dateTime)}</StyledTimeBold>
      <p>{date(dateTime)}</p>
    </StyledTime>
  );
};

export default CodeTimeData;
