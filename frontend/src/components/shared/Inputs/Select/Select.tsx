import React, { FC } from "react";
import s from "./Select.module.scss";

export interface OptionType {
  value: string;
  label: string;
}

export interface SelectProps {
  id: string;
  label: string;
  options: OptionType[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({ id, label, options, onChange }) => {
  return (
    <div className={s.selectContainer}>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={onChange}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
