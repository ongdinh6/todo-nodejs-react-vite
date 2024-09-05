import React from "react";
import { Card, CardContent, Typography, Avatar, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import classNames from "classnames";

import DeleteBtn from "components/shared/DeleteBtn";
import EditBtn from "components/shared/EditBtn";
import { useDeleteProductMutation } from "apis/product/client.ts";
import { useSnackbar } from "contexts/contexts.tsx";

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
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

const StyledAvatar = styled(Avatar)({
  marginRight: "16px",
});

const CommentCard: React.FC<CommentCardProps> = ({ id, name, date, comment, avatarUrl, className }) => {
  const [deleteMutation] = useDeleteProductMutation();
  const { showSnackbar } = useSnackbar();

  const handleDelete = async () => {
    try {
      const result = await deleteMutation(id).unwrap();
      console.log("result: ", result);
      showSnackbar({ severity: "success", message: `<p>The product <b>${name}</b> has been successfully!</p>` });
    } catch (e) {
      console.error("Error: ", e);
      showSnackbar({ severity: "error", message: e instanceof Error ? e.message : "Failed to delete" })
    }
  };

  return (
    <StyledCard className={classNames(className, "space-x-2 flex")}>
      <StyledAvatar className={"m-auto"} src={avatarUrl} alt={name}>
        {name[0]}
      </StyledAvatar>
      <CardContent className={"flex-auto"}>
        <Box mb={1}>
          <Typography variant="h6" component="div">
            {name}
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
