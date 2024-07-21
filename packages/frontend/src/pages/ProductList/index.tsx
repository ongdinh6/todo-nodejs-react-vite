import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useFlags } from "launchdarkly-react-client-sdk";

import { Product } from "apis/product/type.ts";
import CommentCard from "components/shared/CommentCard";
import SearchInput from "components/shared/SearchInput";
import CreateNewProductModal from "components/modal/CreateNewProductModal";
import { PRODUCT_MODALS } from "types/modals";
import { randomKey } from "utils/strings.ts";

import styles from "./styles.module.css";

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
  const { enableAddNewProduct } = useFlags();


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
        {enableAddNewProduct && <Button
          variant={"contained"}
          className={"normal-case rounded-full"}
          onClick={() => handleOpenModal(PRODUCT_MODALS.CREATE_NEW_PRODUCT)}
        >
          Add new product
        </Button>}
      </Grid>

      {products.map((product) => (
        <CommentCard
          key={randomKey()}
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
