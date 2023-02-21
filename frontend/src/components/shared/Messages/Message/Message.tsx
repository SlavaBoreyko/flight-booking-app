import React, { FC } from "react";
import { StyledMessage } from "./styles";

export interface MessageProps {
  title: string;
  message?: string;
}

export const Message: FC<MessageProps> = ({ title, message }) => {
  return (
    <StyledMessage>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledMessage>
  );
};
