import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginatedResult, Product, ProductRequest, SearchRequestParameter } from "apis/product/type.ts";

export const PRODUCT_API = "productApi";

const API_URL = "/api/products";

export const productApi = createApi({
  reducerPath: PRODUCT_API,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<PaginatedResult<Product>, SearchRequestParameter | undefined>({
      query: (params?) => ({
        url: "/",
        params,
      }),
    }),
    addNewProduct: builder.mutation<Product, ProductRequest>({
      query: (payload) => ({
        url: "/new",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddNewProductMutation } = productApi;

