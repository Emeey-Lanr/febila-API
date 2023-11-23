import { Response } from "express"
export const response = (res:Response, statusNumber:number, message:string, success:boolean, resData?:any) => {
    res.status(statusNumber).json({message, success, resData})
}