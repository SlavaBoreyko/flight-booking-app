export const time = (date: string) => {
  const parseDate = new Date(Date.parse(date));
  //   const hour = parseDate.getHours();
  //   const min = parseDate.getMinutes();
  const hour = Math.round(Math.random() * 24)
    .toString()
    .padStart(2, "0");

  const min = Math.round(Math.random() * 59)
    .toString()
    .padStart(2, "0");

  return `${hour}:${min}`;
};
