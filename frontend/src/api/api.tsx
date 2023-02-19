export const host = "http://localhost:3001";

export const apiFlights = () => `${host}/flights`;
export const apiDetails = (id: string) => `${host}/flights/${id}`;

export const apiAirlinesLogo = (code: string) =>
  `https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${code}.png`;
