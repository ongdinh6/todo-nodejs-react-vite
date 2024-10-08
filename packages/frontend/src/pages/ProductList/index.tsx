import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

import CommentCard from "components/shared/CommentCard";
import SearchInput from "components/shared/SearchInput";
import ProductDialog from "components/ProductDialog";

import styles from "./styles.module.css";
import { useGetProductsQuery } from "apis/product/client.ts";
import Spinner from "components/shared/Spinner";
import InternalServerErrorPage from "pages/ErrorPage/InternalServerErrorPage";
import { Product } from "apis/product/type";

const ProductList = () => {
  const { data: paginatedResult, isFetching, error } = useGetProductsQuery(undefined);
  const [modal, setModal] = useState<string | null>(null);

  if (isFetching) {
    return <Spinner />;
  }

  if (error) {
    return <InternalServerErrorPage />;
  }

  const handleOpenModal = (modal: string | null) => {
    setModal(modal);
  };

  return (
    <Box className={styles.productListWrapper}>
      <Grid>
        <SearchInput placeholder="Search book..." />
        <Button variant={"contained"} className={"normal-case rounded-full"} onClick={() => handleOpenModal("create")}>
          Add new product
        </Button>
      </Grid>

      {paginatedResult?.products.map((product: any) => (
        <Card>
          <img src={product.thumbnail}/>
          <Typography variant={"h5"}>{product.title}</Typography>
          <Typography variant={"h6"}>${product.price}</Typography>
          <Typography variant={"subtitle"}>Description: {product.description}</Typography>
        </Card>
      ))}

      {modal === "create" && <ProductDialog open={true} onClose={() => handleOpenModal(null)} />}
    </Box>
  );
};

export default ProductList;
