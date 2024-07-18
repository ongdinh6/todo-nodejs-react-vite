import React, { ReactNode, useMemo, useReducer } from "react";
import { TimesContext } from "./contexts";
import { initialState, timesReducer } from "./reducers";

type Props = {
  children: ReactNode;
};

export const TimesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(timesReducer, initialState);

  const stateMemo = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <TimesContext.Provider value={stateMemo}>{children}</TimesContext.Provider>;
};
