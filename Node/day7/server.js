import app from "./src/app.js";
import { connectDB } from "./src/config/configDB.js";
connectDB

connectDB();

app.listen(3000, () => {
  console.log("Server Started!!!");
});
