import { app } from './app.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB } from './constants.js';
import connectDB from './db/index.js';



dotenv.config({ path: './.env' });

connectDB()
.then(()=>
{
    app.listen(process.env.PORT ||8000, ()=>
    {
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((err)=>
{
    console.log("Mongo db connection failed!! ");
    
})