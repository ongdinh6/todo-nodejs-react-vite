import { DEFAULT_ITEM_PER_PAGE, DEFAULT_PAGE } from "models/productTypes";

export class PaginatedResult<T> {
  data: T[];
  total: number;
  currentPage: number;
  totalPage: number;
  itemsPerPage: number;

  constructor(data: T[], currentPage: number, itemsPerPage = DEFAULT_ITEM_PER_PAGE) {
    this.data = data;
    this.total = data.length;
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
    const page = Math.floor(data.length / itemsPerPage);
    this.totalPage = page > DEFAULT_PAGE ? (data.length % itemsPerPage === 0 ? page : page + 1) : DEFAULT_PAGE;
  }
}
