// Requests
export interface ProductRequest {
  name: string;
  description: string;
  price: number;
}

export interface SearchRequestParameter {
  query: string;
  filters: string[];
  page: number;
}

// Responses
export interface Product {
  id: string;
  name: string;
  createdAt: string;
  description: string;
  image?: string;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  currentPage: number;
  itemsPerPage: number;
  totalPage: number;
}