import React, { useState } from "react";
import SearchInput from "components/shared/SearchInput";
import { Button, Dialog, DialogContent } from "@mui/material";
import { useTimesContext } from "stores/contexts";
import { TimesAction } from "stores/actions";
import classnames from "classnames";
import styles from "./styles.module.css";
import CommentCard from "components/shared/CommentCard";

const ProductList = () => {
  const [count, setCount] = useState(0);
  const [dialog, setDialog] = useState("");
  const { state, dispatch } = useTimesContext();

  const handleCount = async () => {
    setCount((prev) => ++prev);
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if (result) {
      console.log("api returns value");
      setDialog("testing_dialog");
      dispatch(new TimesAction(JSON.stringify(result)));
    }
  };

  const handleCloseDialog = () => setDialog("");

  return (
    <>
      Product List
      <SearchInput placeholder="Search book..." />
      <Button onClick={handleCount}>Click here {count}</Button>
      <h2 className={classnames(styles.theme, "")}>Current State: {state.data}</h2>
      {dialog === "testing_dialog" && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogContent>{state.data}</DialogContent>
        </Dialog>
      )}

      <CommentCard
        name="John Doe"
        date="June 30, 2024"
        comment="This is a sample comment."
        avatarUrl="https://example.com/avatar.jpg"
      />
    </>
  );
};

export default ProductList;
