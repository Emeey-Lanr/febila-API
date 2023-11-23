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
exports.ContactS = void 0;
const contact_1 = require("../models/contact");
const duplicationCheck_1 = require("../helpers/duplicationCheck");
class ContactS {
    static createContact(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                payload = Object.assign({ contact_id: `${process.env.CONTACT_ID}` }, payload);
                const checkifEmailExist = yield (0, duplicationCheck_1.duplicationCheckFunc)(contact_1.contactModel, { email: payload.email });
                console.log(checkifEmailExist);
                if (checkifEmailExist) {
                    return new Error("Email already exist");
                }
                const createNewContact = new contact_1.contactModel(payload);
                const saveContact = yield createNewContact.save();
            }
            catch (error) {
                console.log(error);
                return new Error("An error occured");
            }
        });
    }
    static getContactList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllContact = yield contact_1.contactModel.find({ contact_id: `${process.env.CONTACT_ID}` });
                if (findAllContact.length < 1) {
                    return new Error("Your contact list is empty");
                }
                return findAllContact;
            }
            catch (error) {
                return new Error("An error occured find contacts");
            }
        });
    }
}
exports.ContactS = ContactS;
