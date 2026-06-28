import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// setup banane ke liye
dotenv.config();


// app me express ki saktiya daal di anur server banaya.
const app = express();

// req.body me se data decrypt karke use karne ke liye ye middleware dala
app.use(express.json());

//api banai get type ki jo /login par melegi 
app.get("/login", (req, res) => {
  res.json({ message: "Login api is called " });
});

//api banai post type ki jo /login par melegi 
app.post("/login", (req, res) => {
  const data = req.body;

  console.log(data);

  res.json({ message: "api is called" });
});


//DB conenct karne wala function
function connectDB() {
  mongoose.connect(process.env.MONGO_DB_URI);
  console.log("DB is connected");
  
}


// Port jisme server run hoga
const port = process.env.PORT || 5000;


// server run karaya gaya port par 
app.listen(port, () => {
  console.log("Server is running at port 4500");

// DB connect wale function ko call kiya
  connectDB()
});
