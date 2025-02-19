import { Product } from "@models/common";

export const plansMock: Array<Product> = [
  {
    id: "cabbce0d-a5c5-4590-984b-c6995c81744f",
    name: "Unlimited 1-month Plan",
    regularity: "month",
    price: 3999,
    currency: "USD",
    trial_period: 0,
    trial_amount: 6999,
    note: "Most popular",
    isBestPrice: false,
  },
  {
    id: "cabbce0d-a5c5-4590-984b-c6995c81744e",
    name: "7-day Access",
    regularity: "year",
    price: 100,
    currency: "USD",
    trial_period: 0,
    trial_amount: 0,
    note: "",
    isBestPrice: false,
  },
  {
    id: "cabbce0d-a5c5-4590-984b-c6995c81744g",
    name: "Unlimited Annual Plan",
    regularity: "month",
    price: 2499,
    currency: "USD",
    trial_period: 0,
    trial_amount: 4900,
    note: "Save 50%",
    isBestPrice: true,
  },
];
