import React, { FC, useEffect, useState } from "react";
import { StyledButton } from "./styles";
import { BtnProps } from "@/types/button.types";

export const BigButton: FC<BtnProps> = ({ title, onClick, loading }) => {
  const [btnTitle, setBtnTitle] = useState<string>(title);

  useEffect(() => {
    if (loading) {
      setBtnTitle("  ...  ");
    } else {
      setBtnTitle(title);
    }
  }, [title, loading]);

  return <StyledButton onClick={onClick}>{btnTitle}</StyledButton>;
};
