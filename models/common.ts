export interface Plan {
  id: string;
  name: string;
  oldPrice: number;
  newPrice: number;
  note: string;
  description: string;
  isBestPrice: boolean;
}
