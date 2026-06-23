import express from "express";
import { userModal } from "./model/userModal.js";

const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
  const { name, age } = req.body;

  const user = await userModal.create({ name, age });

  res
    .status(201)
    .json({ message: "Created new User Data Successfully ", user });
});

app.get("/user", async (req, res) => {
  const user = await userModal.find();
  res
    .status(200)
    .json({ message: "Fetched New data successfully", data: user });
});

app.patch

export default app;
