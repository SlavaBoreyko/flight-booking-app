import React, { FC } from "react";
import { BtnProps } from "@/types/button.types";
import { StyledLinkBtn } from "./styles";

export const LinkButton: FC<BtnProps> = ({ title, onClick }) => {
  return <StyledLinkBtn onClick={onClick}>{title}</StyledLinkBtn>;
};
