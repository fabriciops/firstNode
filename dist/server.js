"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const painel_1 = __importDefault(require("./routes/painel"));
const server = (0, express_1.default)();
server.use(index_1.default);
server.use('/painel', painel_1.default);
server.listen(3000);
