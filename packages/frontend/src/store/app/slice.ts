import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "store/app/types.ts";

const initialState: AppState = {

};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {

  }
})

const appReducer = appSlice.reducer;

export default appReducer;
