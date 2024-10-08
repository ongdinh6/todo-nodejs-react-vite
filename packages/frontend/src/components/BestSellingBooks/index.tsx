import React, { ReactElement } from "react";
import { CategoriesMenu } from "components/CategoriesMenu";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const features = [{}, {}, {}, {}, {}];

export const BestSellingBooks = (): ReactElement => {
  return (
    <CategoriesMenu
      leftMenuTitle={"Bestselling Books"}
      rightMenuTitle={"View All"}
      content={features.map((_feature) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image="/static/images/cards/contemplative-reptile.jpg" title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    />
  );
};
