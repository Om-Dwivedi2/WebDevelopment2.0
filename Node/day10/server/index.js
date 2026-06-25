import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/connectDB.js";
import userRouter from "./src/routers/user.router.js";

dotenv.config();

// Server initialized
const app = express();

// Pre-defined Middlewares
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

const port = process.env.PORT || 5000;

// Server Started
app.listen(port, () => {
  console.log("Server is running successfully");
  connectDB();
});
