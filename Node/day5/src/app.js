import express from "express";

const app = express();

app.use(express.json())
const data = [];

app.post("/user", (req, res) => {
  data.push(req.body);

  res.status(201).json("Data created successfully with status code 201");
});

app.get("/user", (req, res) => {
  res.send(data);
    console.log(data);
    
  res.status(200).json("Data send successfully with status code 200");
});

app.delete("/user/:index", (req, res) => {
  delete data[req.params.index];
  res.status(200).json("data deleted successfully with satatus code 200");
});

app.patch("/user/:index", (req, res) => {
  data[req.params.index].age = req.body;
  res.status(201).json("data updated successfully with status code 201");
});



export default app;
