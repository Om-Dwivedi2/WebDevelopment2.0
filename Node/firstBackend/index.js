import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRouter from "./src/routers/auth.route.js";
import publicRouter from "./src/routers/public.route.js";


// initialized the server
const app = express();

app.use("/auth", authRouter);
app.use("/public", publicRouter);


// API 
app.get("/", (req, res) => {
  console.log("API get wala is working bro");
  res.json({ message: "Welcome to my first Backend Porject" });
});

const port = process.env.PORT || 5000;

// created the server
app.listen(port, () => {
  console.log("Server Started on port ", port);
});
