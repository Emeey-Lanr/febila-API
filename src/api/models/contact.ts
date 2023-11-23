import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
  contact_id:{type:String, required:true},
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phonenumber: { type: Number, required: true },
  message: { type: String, required: true },
});

export const contactModel = mongoose.model("contact", contactSchema)