import { duplicationCheckFunc } from "../helpers/duplicationCheck";
import { emailModel } from "../models/newslLetterEmail";
export  class NewsLetterS {
    static async addEmail(email:string) {
        try {
            const checkifEmailExist = await duplicationCheckFunc(emailModel, { email })
            if (checkifEmailExist) {
                return new Error("Email already exist")
            }

            const addNewEmail = new emailModel({ email })
            const add = await addNewEmail.save()
            
        } catch (error:any) {
            return new Error("An error occured trying to save email")
        }
    }
}