import express, { json } from "express";

const app = express();

app.use(json());

let data = [];

app.post("/user", (req, res) => {
  data.push(req.body);

  console.log(req.body);

  res.send("data added");
});

app.get("/user", (req, res) => {
  res.send(data);
});

app.delete("/user/:index", (req, res) => {
  delete data[req.params.index];
  res.send(data);
  res.send("data deleted");
});

app.patch("/user/:index", (req, res) => {
  data[req.params.index].age = req.body.age;
  res.send(data);
});

export default app;
