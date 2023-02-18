export interface FlightType {
  uuid: string;
  airlineCode: string;
  bounds: BoundsType[];
  price: PriceType;
}

export interface BoundsType {
  departure: DepDestType;
  destination: DepDestType;
  duration: string;
}

export interface DepDestType {
  code: string;
  name: string;
  dateTime: string;
}

export interface PriceType {
  amount: number;
  currency: CurrencyType;
}

export enum CurrencyType {
  USD = "USD",
  EUR = "EUR",
}

export enum CabinClassType {
  BUSINESS = "BUSINESS",
  ECONOMY = "ECONOMY",
  FIRST = "FIRST",
}

export interface DetailsType {
  remainingNumberOfSeats: number;
  seatPitch: number;
  freeBaggageAllowed: boolean;
  cabinClass: CabinClassType;
}
