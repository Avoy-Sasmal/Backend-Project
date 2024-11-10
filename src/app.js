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
export  {app}