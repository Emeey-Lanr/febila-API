"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsLetterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const newsLetter_1 = require("../controllers/newsLetter");
exports.newsLetterRoutes = express_1.default.Router();
exports.newsLetterRoutes.post("", newsLetter_1.NewsLetterC.addEmail);
