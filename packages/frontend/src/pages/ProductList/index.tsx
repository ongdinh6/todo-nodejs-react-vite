import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";

import CommentCard from "components/shared/CommentCard";
import SearchInput from "components/shared/SearchInput";

import { Product } from "apis/product/type.ts";

import styles from "./styles.module.css";
import CreateNewProductModal from "components/modal/CreateNewProductModal";
import { PRODUCT_MODALS } from "types/modals";

const products: Product[] = [
  {
    name: "IPhone 14",
    date: "Jun 30 2024",
    comment: "Discount to 50%",
  },
  {
    name: "Samsung Ultra",
    date: "Jul 17 2024",
    comment: "Discount to 70%",
  },
  {
    name: "Redmi Note",
    date: "Jul 20 2024",
    comment: "Get free",
  },
];

const ProductList = () => {
  const [modal, setModal] = useState<string | null>(null);

  const handleOpenModal = (modal: string) => {
    setModal(modal);
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  return (
    <Box className={styles.productListWrapper}>
      <Grid>
        <SearchInput placeholder="Search book..." />
        <Button
          variant={"contained"}
          className={"normal-case rounded-full"}
          onClick={() => handleOpenModal(PRODUCT_MODALS.CREATE_NEW_PRODUCT)}
        >
          Add new product
        </Button>
      </Grid>

      {products.map((product) => (
        <CommentCard
          key={product.date}
          className={"m-2"}
          name={product.name}
          date={product.date}
          comment={product.comment}
          avatarUrl="https://example.com/avatar.jpg"
        />
      ))}

      {modal === PRODUCT_MODALS.CREATE_NEW_PRODUCT && <CreateNewProductModal open={true} onClose={handleCloseModal} />}
    </Box>
  );
};

export default ProductList;
