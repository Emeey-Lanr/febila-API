import { contactModel } from "../models/contact"
export const duplicationCheckFunc = async (model:any, object:{}) => {
        const check = await model.findOne(object)
        if (check !== null) {
            return true
        }
        return false
   
}