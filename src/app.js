import express from "express";
import cors from "cors"
import cookieParser  from "cookie-parser"
const app = express();
// kon kon se frontend connect kar sakat hai 
 app.use(cors({
  origin : process.env.CORS_ORIGIN,
  credentials: true
 }))
// json se jo data ayega 
 app.use(express.json({limit:"16kb"}))
//url data accept 
app.use(express.urlencoded({extended: true,limit: "16kb"}))

// koi image ho fav icon ho uska liya public asset mai server mai store karna chahta huu 
app.use(express.static("public"))//folder name 
app.use(cookieParser())





//routes import 
import userRouter from "./routes/user.routes.js" // machaha nam tabhi de sakte hai jab export default ho raha hoo 


//routes declaration - app router ko get karne ka liya middle ware lana padega 
app.use("/api/v1/users",userRouter)

// console.log("i amm app.js");



// http://localhost:8000/api/v1/users/register  */
export  {app} 