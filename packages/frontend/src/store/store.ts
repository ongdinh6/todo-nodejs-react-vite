import { configureStore } from "@reduxjs/toolkit";

import { PRODUCT_API, productApi } from "apis/product/client.ts";
import appReducer from "store/app/slice.ts";
import productReducer, { PRODUCT_SLICE_REDUCER_NAME } from "store/product/slice.ts";

export const store = configureStore({
  reducer: {
    // api reducers
    [PRODUCT_API]: productApi.reducer,

    // slice reducers
    app: appReducer,
    [PRODUCT_SLICE_REDUCER_NAME]: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
