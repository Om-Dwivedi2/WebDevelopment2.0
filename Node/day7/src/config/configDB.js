import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  await mongoose.connect(process.env.MongoDB_URI);
  console.log("DataBase Connected");
}
