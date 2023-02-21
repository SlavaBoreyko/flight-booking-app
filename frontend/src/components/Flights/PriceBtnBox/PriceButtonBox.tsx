import React, { FC } from "react";
import { StyledBox } from "./styles";
import { BigButton } from "@/components/shared/Buttons";
import { currencySymbol } from "@/constants";
import { PriceType } from "@/types/data.types";

interface PriceButtonBoxProps {
  price: PriceType;
  btnTitle: string;
  onClick: () => void;
  loading: boolean;
}

const PriceButtonBox: FC<PriceButtonBoxProps> = ({
  price,
  btnTitle,
  onClick,
  loading,
}) => {
  return (
    <StyledBox>
      <p>
        {`${currencySymbol[price.currency]} ${price.amount}`}
        <span> p.p.</span>
      </p>
      <BigButton title={btnTitle} onClick={onClick} loading={loading} />
    </StyledBox>
  );
};

export default PriceButtonBox;
