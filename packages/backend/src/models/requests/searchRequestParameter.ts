import { IsInt, Max, Min } from "class-validator";

export class SearchRequestParameter {
  query?: string;
  filters?: string[];
  @IsInt({ message: "Page must be a number between 1 and 2000!"})
  @Min(1)
  @Max(2000)
  page?: number;

  constructor(query: string, filters: string[], page: number) {
    this.query = query;
    this.filters = filters;
    this.page = page;
  }
}