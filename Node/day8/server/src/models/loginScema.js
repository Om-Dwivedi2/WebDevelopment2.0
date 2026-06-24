import mongoose from "mongoose";

const loginSchema = new mongoose.Schema( 
  {
    name: String,
    password: String,
  }

  
);
export const loginModel = mongoose.model("login", loginSchema);
