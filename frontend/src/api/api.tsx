export const host = "http://localhost:3001";

export const api = {
  flights: {
    list: `${host}/flights`,
    details: (id: string) => `${host}/flights/${id}`,
    airlinesLogo: (code: string) =>
      `https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${code}.png`,
  },
};
