"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const emailSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true }
});
exports.emailModel = mongoose_1.default.model("email", emailSchema);
