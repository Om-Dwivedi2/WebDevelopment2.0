import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/connectDB.config.js";
import { router } from "./src/routers/auth.router.js";
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use("/auth", router);

// PORT
const port = process.env.PORT || 5000;

// Server Starting
app.listen(port, () => {
  console.log("Server started Running Successfully with port", port);
  connectDB();
});
