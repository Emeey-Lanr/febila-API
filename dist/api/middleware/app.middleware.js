"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appMiddleware = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contact_1 = require("../routes/contact");
const newsLetter_1 = require("../routes/newsLetter");
const appMiddleware = (app) => {
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/contact", contact_1.contactRoute);
    app.use("/newsletter", newsLetter_1.newsLetterRoutes);
};
exports.appMiddleware = appMiddleware;
