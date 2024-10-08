import React from "react";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import classNames from "classnames";
import FavoriteIcon from "@mui/icons-material/Favorite";

import DeleteBtn from "components/shared/DeleteBtn";
import EditBtn from "components/shared/EditBtn";
import { useDeleteProductMutation } from "apis/product/client.ts";
import { useSnackbar } from "contexts/contexts.tsx";
import { Link } from "react-router-dom";
import { Image } from "@mui/icons-material";

interface CommentCardProps {
  id: string;
  name: string;
  date: string;
  comment: string;
  avatarUrl?: string;
  className?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  padding: theme.spacing(2),
  borderRadius: 0,
  border: "1px solid transparent",
}));

const CommentCard: React.FC<CommentCardProps> = ({ id, name, date, comment, className }) => {
  const [deleteMutation] = useDeleteProductMutation();
  const { showSnackbar } = useSnackbar();

  const handleDelete = async () => {
    try {
      const result = await deleteMutation(id).unwrap();
      showSnackbar({ severity: "success", message: result.message });
    } catch (e) {
      showSnackbar({ severity: "error", message: e instanceof Error ? e.message : "Failed to delete" });
    }
  };

  return (
    <StyledCard className={classNames(className, "space-x-2 flex")}>
      <CardContent className={"flex-auto"}>
        <Box mb={1}>
          <Typography variant="h6" component="div">
            <Link to={`/product/${id}`}>{name}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </Box>
        <Typography variant="body1">{comment}</Typography>
      </CardContent>
      <Stack className={"space-x-2 text-right m-auto"} direction={"row"}>
        <DeleteBtn onClick={handleDelete} />
        <EditBtn />
      </Stack>
    </StyledCard>
  );
};

export default CommentCard;
