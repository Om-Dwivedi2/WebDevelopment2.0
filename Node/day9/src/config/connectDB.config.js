import mongoose from "mongoose";

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB Host:", conn.connection.host);
    console.log("MongoDB Name:", conn.connection.name);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

export default connectDB;
