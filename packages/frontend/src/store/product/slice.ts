import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { ProductState } from "store/product/types.ts";
import { Product } from "apis/product/type.ts";

export const PRODUCT_SLICE_REDUCER_NAME = "products";

const initialState: ProductState = {
  data: [],
}

export const productSlice = createSlice({
  name: PRODUCT_SLICE_REDUCER_NAME,
  initialState,
  reducers: {
    initProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
    addNewProduct: (state, action: PayloadAction<Product>) => {
      state.data.push(action.payload);
    },
  },
});

export const { initProducts, addNewProduct } = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
