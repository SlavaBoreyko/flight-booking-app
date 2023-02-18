import { dayString } from "../constants/dayString";
import { monthString } from "../constants/monthString";

export const date = (date: string) => {
  const parseDate = new Date(Date.parse(date));
  const day = parseDate.getDay();
  const dateNum = parseDate.getDate().toString().padStart(2, "0");
  const month = parseDate.getMonth();

  return `${dayString[day]} ${dateNum} ${monthString[month]}`;
};
