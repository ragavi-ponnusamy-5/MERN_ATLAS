const express= require("express");
const userRoute=require("./routes/userRoute");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/api",userRoute);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`); 
});