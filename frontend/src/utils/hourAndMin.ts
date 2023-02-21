export const hourAndMin = (date: string) => {
  const parseDate = new Date(Date.parse(date));

  const hour = parseDate.getHours().toString().padStart(2, "0");
  const min = parseDate.getMinutes().toString().padStart(2, "0");

  return `${hour}:${min}`;
};
