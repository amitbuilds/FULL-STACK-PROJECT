// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";



import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path : './.env'
})


console.log("MONGO_URI VALUE:", process.env.MONGO_URI);



connectDB();

// require('dotenv').config({path : './env'})






/*

import express from "express";
const app = express();



;( async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    app.on("error" , (error) => {
      console.log("Error :" , error);
      throw error
    })

    app.listen(process.env.PORT ,() => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })


  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    throw error;
  }
})()

*/