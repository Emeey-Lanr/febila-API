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
exports.NewsLetterS = void 0;
const duplicationCheck_1 = require("../helpers/duplicationCheck");
const newslLetterEmail_1 = require("../models/newslLetterEmail");
class NewsLetterS {
    static addEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checkifEmailExist = yield (0, duplicationCheck_1.duplicationCheckFunc)(newslLetterEmail_1.emailModel, { email });
                if (checkifEmailExist) {
                    return new Error("Email already exist");
                }
                const addNewEmail = new newslLetterEmail_1.emailModel({ email });
                const add = yield addNewEmail.save();
            }
            catch (error) {
                return new Error("An error occured trying to save email");
            }
        });
    }
}
exports.NewsLetterS = NewsLetterS;
