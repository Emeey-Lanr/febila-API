"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const response = (res, statusNumber, message, success, resData) => {
    res.status(statusNumber).json({ message, success, resData });
};
exports.response = response;
