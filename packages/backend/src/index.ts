import "module-alias/register";
import express from "express";
import productRoutes from "routes/ProductRoutes";

const app = express();

app.use("/api/products", productRoutes);


app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});

export default app;
