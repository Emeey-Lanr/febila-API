import { Request, Response } from "express";
import { NewsLetterS } from "../services/newsLetter";
import { response } from "../helpers/response";
export class NewsLetterC {
    static async addEmail(req:Request, res:Response) {
        try {
            const addNewEmail = await NewsLetterS.addEmail(req.body.email)
            if (addNewEmail instanceof Error) {
                return response(res, 400, `${addNewEmail.message}`, false)
            }
            return response(res, 200, "Thanks for subscrbing", true)
        } catch (error:any) {
             return response(res, 400,  error.message, false)
        }
    }
}