import { contactModel } from "../models/contact"
import { duplicationCheckFunc } from "../helpers/duplicationCheck"
import { ContactTypeSchema } from "../interface/contact"
export class ContactS {
    static async createContact(payload:ContactTypeSchema ) {
        try {
            payload = { contact_id: `${process.env.CONTACT_ID}`, ...payload } 
             const checkifEmailExist = await duplicationCheckFunc(contactModel, {email:payload.email})
         
            if (checkifEmailExist) {
                 return new Error("Email already exist")
            }
            
            const createNewContact = new contactModel(payload)
            const saveContact = await createNewContact.save()
        
        } catch (error: any) {
           
            return new Error("An error occured")
        }
        
    }

    static async getContactList() {
        try {
            const findAllContact = await contactModel.find({contact_id:`${process.env.CONTACT_ID}`})
            if (findAllContact.length < 1) {
                return new Error("Your contact list is empty")
            }
            return findAllContact
        } catch (error) {
             return new Error("An error occured find contacts")
        }
    }
}