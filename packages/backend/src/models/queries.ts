export interface FilterableField {
  name: string;
}

export type Filter = {
  [key in keyof FilterableField]: string;
};

export interface PaginationQuery {
  q: string;
  page: number;
  filters: Filter[];
}
