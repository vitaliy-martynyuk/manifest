import { Plan } from "@models/index";

export const plansMock: Array<Plan> = [
  {
    id: "cabbce0d-a5c5-4590-984b-c6995c81744f",
    name: "Unlimited 1-month Plan",
    newPrice: 3999,
    oldPrice: 6999,
    note: "Most popular",
    description: "Per month",
    isBestPrice: false,
  },
  {
    id: "cabbce0d-a5c5-4590-984b-c6995c81744e",
    name: "7-day Access",
    newPrice: 100,
    oldPrice: 999,
    note: "",
    description: "Then $29.99 per month",
    isBestPrice: false,
  },
  {
    id: "cabbce0d-a5c5-4590-984b-c6995c81744g",
    name: "Unlimited Annual Plan",
    newPrice: 2499,
    oldPrice: 4999,
    note: "Save 50%",
    description: "Per month",
    isBestPrice: true,
  },
];
