import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginatedResult, Product, ProductRequest, SearchRequestParameter } from "apis/product/type.ts";

export const PRODUCT_API = "productApi";

const API_URL = "/api/products";

export const productApi = createApi({
  reducerPath: PRODUCT_API,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["PRODUCT"],
  endpoints: (builder) => ({
    getProducts: builder.query<PaginatedResult<Product>, SearchRequestParameter | undefined>({
      query: (params?) => ({
        url: "/",
        params,
      }),
      providesTags: ["PRODUCT"],
    }),
    addNewProduct: builder.mutation<Product, ProductRequest>({
      query: (payload) => ({
        url: "/new",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["PRODUCT"],
    }),
    deleteProduct: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRODUCT"],
    })
  }),
});

export const { useGetProductsQuery, useAddNewProductMutation, useDeleteProductMutation } = productApi;
