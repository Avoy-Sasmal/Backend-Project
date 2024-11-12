// require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import {app} from "./app.js"


dotenv.config({
  path: "./env"
})

// function connectDB(){

// }
// connectDB()
connectDB().then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port :${process.env.PORT}`);
    
  })
})
.catch((err)=>{
  console.log("Mongodb connection failed!!",err);
  
});
//add event handeling for this app 
// app.on("error", (error) => {
//   console.log("Error", error);
//   throw error;
// });











/*     its a approach of connectivity but here index file pai bohot sara code ho rah ahey 
import express from "express"

(async()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //add event listner some professonal approach 
  app.on("error",(error)=>{
console.log("Error",error);
throw error
  })
  app.listen(process.env.PORT,()=>{
    console.log(`App i slisting on port ${process.env.PORT}`);
    
  })
  } catch (error) {

    console.error("ERROR",error);
    throw err
    
  }
})()*/