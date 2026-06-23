import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.mongoDB_URI);
    console.log("MongoDB Connected");
  } catch (error) {}
}
