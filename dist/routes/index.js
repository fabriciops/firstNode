"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Olá');
});
router.get('/contato', (req, res) => {
    res.send('contato');
});
router.get('/sobre', (req, res) => {
    res.send('sobre');
});
exports.default = router;
