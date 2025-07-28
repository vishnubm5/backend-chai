//require('dotenv').config({path: '.env'})
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB } from './constants.js';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });

connectDB();











// //iffi its called, instead of writing function(){} then call function
//import express from 'express'
//const app=express()
// ;(async ()=>
// {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB}`)
//         app.on("error",(error)=>
//         {
//             console.log("ERRR",error);
//             throw error 
//         }  ) 

//         app.listen(process.env.PORT,() =>
//         {
//             console.log(`Listening at port ${process.env.PORT}`)
//         })
//     }
//     catch(error)
//     {
//         console.error(err)
//         throw error
//     }
// })()