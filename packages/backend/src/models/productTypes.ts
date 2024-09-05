export const DEFAULT_ITEM_PER_PAGE = 10;
export const DEFAULT_PAGE = 1;

export interface Filter {
  name: string;
  value: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}
