import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

import { ProductRequest } from "apis/product/type";
import { useAddNewProductMutation } from "apis/product/client.ts";
import { useSnackbar } from "contexts/contexts.tsx";

const ProductForm: React.FC = () => {
  const [addMutation] = useAddNewProductMutation();
  const { showSnackbar } = useSnackbar();

  const [formData, setFormData] = useState<ProductRequest>({
    name: "",
    description: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addMutation(formData).unwrap();
    } catch (e) {
      if (e instanceof Error) {
        showSnackbar({ severity: "error", message: e.message });
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      description: "",
      price: 0,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
      <TextField label="Description" name="description" value={formData.description} onChange={handleChange} required />
      <TextField label="Price" name="price" type="number" value={formData.price} onChange={handleChange} required />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button type="button" variant="outlined" color="secondary" onClick={handleCancel}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
