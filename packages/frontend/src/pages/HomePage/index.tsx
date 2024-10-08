import React, { ReactElement } from "react";
import { FeaturedCategories } from "components/FeaturedCategories";
import { BestSellingBooks } from "components/BestSellingBooks";
import { FeaturedBooks } from "components/FeaturedBooks";

const HomePage = (): ReactElement => {
  return (
    <>
      <FeaturedCategories />
      <BestSellingBooks />
      <FeaturedBooks />
    </>
  );
};

export default HomePage;
