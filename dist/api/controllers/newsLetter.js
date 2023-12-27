"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsLetterC = void 0;
const newsLetter_1 = require("../services/newsLetter");
const response_1 = require("../helpers/response");
class NewsLetterC {
    static addEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addNewEmail = yield newsLetter_1.NewsLetterS.addEmail(req.body.email);
                if (addNewEmail instanceof Error) {
                    return (0, response_1.response)(res, 400, `${addNewEmail.message}`, false);
                }
                return (0, response_1.response)(res, 200, "Thanks for subscrbing", true);
            }
            catch (error) {
                return (0, response_1.response)(res, 400, error.message, false);
            }
        });
    }
}
exports.NewsLetterC = NewsLetterC;
