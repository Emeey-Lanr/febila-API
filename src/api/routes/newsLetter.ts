import express from "express"
import { NewsLetterC } from "../controllers/newsLetter"
export const newsLetterRoutes = express.Router()

newsLetterRoutes.post("", NewsLetterC.addEmail)