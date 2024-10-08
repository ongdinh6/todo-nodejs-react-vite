import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import ProductForm from "components/ProductForm";

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ open, onClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Product Form</DialogTitle>
        <DialogContent>
          <ProductForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
