"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TransaccionesController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transacciones = yield database_1.default.query('SELECT * FROM transacciones');
            res.json(transacciones);
        });
    }
    nuevo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO transacciones set ?', [req.body]);
            res.json({ message: 'Se guardo una transaccion' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoTransaccion } = req.params;
            yield database_1.default.query('UPDATE transacciones SET ? where codigoTransaccion = ?', [req.body, codigoTransaccion]);
            res.json({ message: 'Se modifico exitosamente la transaccion' });
        });
    }
    elimina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoTransaccion } = req.params;
            yield database_1.default.query('DELETE FROM transacciones where codigoTransaccion = ?', [codigoTransaccion]);
            res.json({ message: 'Se borro exitosamente la transaccion' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoTransaccion } = req.params;
            const transacciones = yield database_1.default.query('SELECT * FROM transacciones where codigoTransaccion = ?', [codigoTransaccion]);
            if (transacciones.length > 0) {
                return res.json(transacciones[0]);
            }
            res.status(404).json({ message: 'No existe la transaccion' });
        });
    }
}
const transaccionController = new TransaccionesController();
exports.default = transaccionController;
