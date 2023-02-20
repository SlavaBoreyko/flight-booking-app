import React, { FC } from "react";
import s from "./Message.module.scss";

export interface MessageProps {
  title: string;
  message?: string;
}

export const Message: FC<MessageProps> = ({ title, message }) => {
  return (
    <div className={s.containerMessage}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
