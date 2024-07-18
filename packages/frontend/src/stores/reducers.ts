import { AppActions } from "./actions";

export type TimeState = {
  data: string;
};

export const initialState: TimeState = {
  data: "",
};

export const timesReducer = (state = initialState, action: AppActions) => {
  if (action.type === "Update action") {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};
