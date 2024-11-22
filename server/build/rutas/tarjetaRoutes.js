"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarjetaController_1 = __importDefault(require("../controllers/tarjetaController"));
class TarjetaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tarjetaController_1.default.lista);
        this.router.post('/', tarjetaController_1.default.nuevo);
        this.router.put('/:numTarjeta', tarjetaController_1.default.actualiza);
        this.router.delete('/:numTarjeta', tarjetaController_1.default.elimina);
        this.router.get('/:numTarjeta', tarjetaController_1.default.buscar);
    }
}
const tarjetaRoutes = new TarjetaRoutes();
exports.default = tarjetaRoutes.router;
