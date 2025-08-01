import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app=express()

//USER APP.USE when there is a middleware

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))

app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({
    extended:true, limit:"16kb"
}))

app.use(express.static("public"))
app.use(express.cookieParser())


export {app}