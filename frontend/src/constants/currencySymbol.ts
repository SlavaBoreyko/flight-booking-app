import { CurrencyType } from "@/types/data.types";

export const currencySymbol: Record<CurrencyType, string> = {
  [CurrencyType.EUR]: "€",
  [CurrencyType.USD]: "$",
};
