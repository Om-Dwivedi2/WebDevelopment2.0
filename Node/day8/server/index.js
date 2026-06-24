import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/Database.js";
import authRouter from "./src/routers/auth.route.js";
import cors from "cors";
dotenv.config();

// Server Created
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

//Port
const port = process.env.PORT || 4500;

// Server Started
app.listen(port, () => {
  console.log("Server Started at port ", port);

  // Connecting MongoDB
  connectDB();
});
