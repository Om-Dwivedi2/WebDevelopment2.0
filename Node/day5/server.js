import app from "./src/app.js";
import mongoose from "mongoose";

function connectDB() {
  mongoose
  .connect("mongodb://localhost:27017/day5")
  .then(console.log("Database is connected with server"));
}

connectDB();

app.listen(3000, () => {
  console.log("Server is running");
});
