import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/connectDB.config.js";
import { router } from "./src/routers/auth.router.js";
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use("/auth", router);

// Default Error Handler
app.use((err, req, res, next) => {
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatusCode = err.statusCode || 500;

  res.statusCode(ErrStatusCode)
});

// PORT
const port = process.env.PORT || 5000;

// Server Starting
app.listen(port, () => {
  console.log("Server started Running Successfully with port", port);
  connectDB();
});
