export enum ProductStatus {
  PENDING = "pending",
  RECEIVED = "received",
  CANCELED = "canceled",
}

export interface Product {
  id: string;
  name: string;
  description: string;
  status: ProductStatus;
}
