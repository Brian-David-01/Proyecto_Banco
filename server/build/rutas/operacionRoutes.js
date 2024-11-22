"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const operacionController_1 = __importDefault(require("../controllers/operacionController"));
class OperacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', operacionController_1.default.lista);
        this.router.post('/', operacionController_1.default.nuevo);
        this.router.put('/:codigoOperacion', operacionController_1.default.actualiza);
        this.router.delete('/:codigoOperacion', operacionController_1.default.elimina);
        this.router.get('/:codigoOperacion', operacionController_1.default.buscar);
    }
}
const operacionRoutes = new OperacionRoutes();
exports.default = operacionRoutes.router;
