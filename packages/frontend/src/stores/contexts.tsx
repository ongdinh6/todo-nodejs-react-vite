import React, { ReactNode, createContext, useContext, FC, useState, useCallback, useMemo } from "react";
import { Alert, Snackbar, Stack } from "@mui/material";

import styles from "./styles.module.css";
import { SnackbarCloseReason } from "@mui/material/Snackbar/Snackbar";

interface SnackbarProps {
  id: string;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

interface SnackbarContextType {
  showSnackbar: (props: SnackbarProps) => void;
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

interface SnackbarItemProps {
  index: number;
  props: SnackbarProps;
  onClose: (id: string) => void;
}

const SnackbarItem = ({ props, index, onClose }: SnackbarItemProps) => {
  const [open, setOpen] = useState(true);

  const handleAutoDismissed = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      style={{ marginBottom: index * 80 }}
      className={styles.snackbar}
      key={props.id}
      open={open}
      onClose={handleAutoDismissed}
    >
      <Alert onClose={() => onClose(props.id)} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export const SnackbarProvider: FC<{ children: ReactNode, maxSnack?: number }> = ({ children, maxSnack = 5 }) => {
  const [snackbars, setSnackbars] = useState<SnackbarProps[]>([]);

  const showSnackbar = useCallback((props: SnackbarProps) => {
    setSnackbars(prev => {
      if (prev.length >= maxSnack) {
        prev.pop(); // remove the top item (ordered bottom)
      }
      return [props, ...prev];
    });
  }, []);

  const handleClose = (id: string) => {
    const newState = snackbars.filter(snackbar => snackbar.id !== id);
    setSnackbars(newState);
  };

  const value = useMemo(() => ({ showSnackbar }), [showSnackbar]);

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Stack spacing={2} sx={{ maxWidth: 600 }}>
        {snackbars.map((snackbar, index) => (<SnackbarItem key={snackbar.id} index={index} props={snackbar} onClose={handleClose} />))}
      </Stack>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
