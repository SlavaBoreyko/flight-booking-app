export const randomTime = (date: string) => {
  let parseDate = new Date(Date.parse(date));

  const randomHour = Math.round(Math.random() * 24);
  const randomMin = Math.round(Math.random() * 59);
  const randomInMillis = (360 * randomHour + randomMin * 60) * 1000;
  parseDate.setTime(parseDate.getTime() + randomInMillis);

  return parseDate.toISOString();
};
