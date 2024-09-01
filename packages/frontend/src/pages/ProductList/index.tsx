import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";

import CommentCard from "components/shared/CommentCard";
import SearchInput from "components/shared/SearchInput";
import ProductDialog from "components/ProductDialog";

import styles from "./styles.module.css";
import { useGetProductsQuery } from "apis/product/client.ts";
import Spinner from "components/shared/Spinner";
import { useAppDispatch, useAppSelector } from "store/hooks.ts";
import { initProducts } from "store/product/slice.ts";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.data);
  const { data: paginatedResult, isFetching, error } = useGetProductsQuery(undefined);
  const [modal, setModal] = useState<string | null>(null);

  useEffect(() => {
    dispatch(initProducts(paginatedResult?.data ?? []));
  }, [dispatch, paginatedResult]);

  if (isFetching) {
    return <Spinner />;
  }

  const handleOpenModal = (modal: string) => {
    setModal(modal);
  };

  return (
    <Box className={styles.productListWrapper}>
      <Grid>
        <SearchInput placeholder="Search book..." />
        <Button
          variant={"contained"}
          className={"normal-case rounded-full"}
          onClick={() => handleOpenModal("create")}
        >
          Add new product
        </Button>
      </Grid>

      {products.map((product: any) => (
        <CommentCard
          key={product.id}
          name={product.name}
          date={product.createdAt}
          comment={product.description}
          avatarUrl="https://example.com/avatar.jpg"
        />
      ))}

      {
        modal === "create" && <ProductDialog open={true} />
      }
    </Box>
  );
};

export default ProductList;
