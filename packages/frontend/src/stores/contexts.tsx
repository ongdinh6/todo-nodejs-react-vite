import { createContext, useContext } from "react";
import { TimeState } from "./reducers";
import { TimesAction } from "./actions";

type ContextProps = {
  state: TimeState;
  dispatch: React.Dispatch<TimesAction>;
};

export const TimesContext = createContext<ContextProps | null>(null);

export const useTimesContext = () => {
  const context = useContext(TimesContext);
  if (!context) {
    throw new Error("useTimesContext must be used within UseTimesProvider");
  }
  return context;
};

export const SnackbarProvider = () => {
  
}
t