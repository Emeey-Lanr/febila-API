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
exports.ContactC = void 0;
const contact_1 = require("../services/contact");
const response_1 = require("../helpers/response");
class ContactC {
    static createContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newContact = yield contact_1.ContactS.createContact(req.body);
                if (newContact instanceof Error) {
                    return (0, response_1.response)(res, 400, `${newContact.message}`, false);
                }
                return (0, response_1.response)(res, 200, "Thanks for contacting Febila, we will get back to you soon", true);
            }
            catch (error) {
                return (0, response_1.response)(res, 400, "An error occured", false);
            }
        });
    }
    static contactList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllContact = yield contact_1.ContactS.getContactList();
                if (findAllContact instanceof Error) {
                    return (0, response_1.response)(res, 404, `${findAllContact.message}`, false);
                }
                return (0, response_1.response)(res, 200, "Success", true, findAllContact);
            }
            catch (error) {
                return (0, response_1.response)(res, 404, "An error occured find contact list", false);
            }
        });
    }
}
exports.ContactC = ContactC;
