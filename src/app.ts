import express, {Express} from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import { appMiddleware } from "./api/middleware/app.middleware";
const app: Express = express()
dotenv.config()
appMiddleware(app)
let PORT = process.env.PORT_NUMBER;







app.listen(PORT, async () => {
  try {
    const connect = await mongoose.connect(`${process.env.URI}`)
    console.log(`App has connected on port  ${process.env.PORT_NUMBER} `);
  } catch (error) {
    console.log("An error occured connecting")
  }
})