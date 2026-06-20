const express = require("express");

const app = express();
app.use(express.json());
const data = [];



app.post("/", (req, res) => {
  console.log(req.body);
  data.push(req.body);
  res.send("Data send");
});

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server is running");
});
