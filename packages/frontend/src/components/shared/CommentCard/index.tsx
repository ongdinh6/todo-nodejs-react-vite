import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

interface CommentCardProps {
  name: string;
  date: string;
  comment: string;
  avatarUrl?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

const StyledAvatar = styled(Avatar)({
  marginRight: '16px',
});

const CommentCard: React.FC<CommentCardProps> = ({ name, date, comment, avatarUrl }) => {
  return (
    <StyledCard>
      <StyledAvatar src={avatarUrl} alt={name}>
        {name[0]}
      </StyledAvatar>
      <CardContent>
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
    </StyledCard>
  );
};

export default CommentCard;
