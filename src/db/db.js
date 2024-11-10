import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB = async() =>{
  try {
    // connection to data base and goive the db name  give return obj 
   const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n connection to db!! host : ${connectionInstance.connection.host}`);
   
  } catch (error) {
    console.log("MONGODB connection Failed  ");
    console.log(error)
    process.exit(1)
    
  }
}

export default connectDB