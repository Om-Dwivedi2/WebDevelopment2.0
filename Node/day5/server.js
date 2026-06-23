import app from "./src/app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

async function connectDB() {
  await mongoose
  .connect(process.env.MongoDB_URI)
  .then(console.log("Database is connected with server"));
}

connectDB();

app.listen(3000, () => {
  console.log("Server is running");
});
