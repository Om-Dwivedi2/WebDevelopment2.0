import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.mongoDB_URI);
    console.log("MongoDB Connected");

    console.log("DB Host: " , connectDB.connection.host);
    console.log("DB Name: " , connectDB.connection.name);
    


  } catch (error) {
    console.log(error.message);
    process.exit(1); // isse code stop jayega
    
  }
}
