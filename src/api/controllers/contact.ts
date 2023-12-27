import { Request, Response } from "express"
import { ContactS } from "../services/contact"
import { response } from "../helpers/response"
export class ContactC {
    static async createContact(req: Request, res: Response) {
        try {
            const newContact = await ContactS.createContact(req.body)
            if (newContact instanceof Error) {
             return response(res, 400, `${newContact.message}`, false);
            }
            return  response(res,200, "Thanks for contacting Febila, we will get back to you soon", true)
        } catch (error:any) {
            return response(res, 400, "An error occured", false)
        }
        
    }
    static async contactList(req: Request, res: Response) {
        try {
            const findAllContact = await ContactS.getContactList()
            if (findAllContact instanceof Error) {
              return response(res, 404, `${findAllContact.message}`, false);
            }
             return  response(res,200, "Success", true, findAllContact)
        } catch (error) {
                   return response(res, 404, "An error occured find contact list", false);
        }
    }
    
}
 
