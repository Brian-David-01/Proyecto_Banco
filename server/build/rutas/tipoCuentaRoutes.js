"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoCuentaController_1 = __importDefault(require("../controllers/tipoCuentaController"));
class TipoCuentaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tipoCuentaController_1.default.lista);
        this.router.post('/', tipoCuentaController_1.default.nuevo);
        this.router.put('/:codigoCuenta', tipoCuentaController_1.default.actualiza);
        this.router.delete('/:codigoCuenta', tipoCuentaController_1.default.elimina);
        this.router.get('/:codigoCuenta', tipoCuentaController_1.default.buscar);
    }
}
const tipoCuentaRoutes = new TipoCuentaRoutes();
exports.default = tipoCuentaRoutes.router;
