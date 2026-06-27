import express from "express";

const app = express();

console.log("Mai om hu");

app.get("/om", (req, res) => {
  console.log("data backedn se lelo");
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
