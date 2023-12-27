import express, { Express } from "express"
import cors from "cors"
import { contactRoute } from "../routes/contact"
import { newsLetterRoutes } from "../routes/newsLetter"
export const appMiddleware = (app:Express) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    app.use(express.json())
    app.use("/contact", contactRoute)
    app.use("/newsletter", newsLetterRoutes)
}