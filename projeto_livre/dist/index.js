"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
if (validator_1.default.isLowercase("F")) {
    console.log("fod");
}
else {
    console.log("É isso mesmo");
}
