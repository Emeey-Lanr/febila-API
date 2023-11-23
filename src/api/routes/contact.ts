import express from "express"
import { ContactC } from "../controllers/contact"
 export const contactRoute = express.Router()

contactRoute.post("/", ContactC.createContact)
contactRoute.get("/all",  ContactC.contactList)