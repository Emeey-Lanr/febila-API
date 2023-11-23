"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoute = void 0;
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controllers/contact");
exports.contactRoute = express_1.default.Router();
exports.contactRoute.post("/", contact_1.ContactC.createContact);
exports.contactRoute.get("/all", contact_1.ContactC.contactList);
