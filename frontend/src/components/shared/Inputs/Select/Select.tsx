import React, { FC } from "react";
import { StyledContainer, StyledLabel, StyledSelect } from "./styles";

export interface OptionType {
  value: string;
  label: string;
}

export interface SelectProps {
  id: string;
  label: string;
  options: OptionType[];
  sortQuery: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({
  id,
  label,
  options,
  sortQuery,
  onChange,
}) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect
        name={id}
        id={id}
        onChange={onChange}
        defaultValue={sortQuery}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
};
