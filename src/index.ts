import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  /*global console*/
  /*eslint no-undef: "error"*/
  console.log(`Server is running on port ${port}`);
});
