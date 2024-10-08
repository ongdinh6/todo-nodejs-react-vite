import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  DeleteItemStatus,
  PaginatedResult,
  Product,
  ProductRequest,
  SearchRequestParameter,
} from "apis/product/type.ts";

export const PRODUCT_API = "productApi";

const API_URL = "https://dummyjson.com/";



export const productApi = createApi({
  reducerPath: PRODUCT_API,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["PRODUCT"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, SearchRequestParameter | undefined>({
      query: (params?) => ({
        url: "products",
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
    deleteProduct: builder.mutation<DeleteItemStatus, string>({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRODUCT"],
    }),
  }),
});

export const { useGetProductsQuery, useAddNewProductMutation, useDeleteProductMutation } = productApi;
