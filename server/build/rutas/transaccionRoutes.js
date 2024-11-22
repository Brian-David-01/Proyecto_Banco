"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaccionesController_1 = __importDefault(require("../controllers/transaccionesController"));
class TransaccionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', transaccionesController_1.default.lista);
        this.router.post('/', transaccionesController_1.default.nuevo);
        this.router.put('/:codigoTransaccion', transaccionesController_1.default.actualiza);
        this.router.delete('/:codigoTransaccion', transaccionesController_1.default.elimina);
        this.router.get('/:codigoTransaccion', transaccionesController_1.default.buscar);
    }
}
const transaccionesRoutes = new TransaccionesRoutes();
exports.default = transaccionesRoutes.router;
