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
class OperacionController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const operacion = yield database_1.default.query('SELECT * FROM operacion');
            res.json(operacion);
        });
    }
    nuevo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO operacion set ?', [req.body]);
            res.json({ message: 'Se guardo una operacion' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoOperacion } = req.params;
            yield database_1.default.query('UPDATE operacion SET ? where codigoOperacion = ?', [req.body, codigoOperacion]);
            res.json({ message: 'Se modifico exitosamente la operacion' });
        });
    }
    elimina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoOperacion } = req.params;
            yield database_1.default.query('DELETE FROM operacion where codigoOperacion = ?', [codigoOperacion]);
            res.json({ message: 'Se borro exitosamente la operacion' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoOperacion } = req.params;
            const operacion = yield database_1.default.query('SELECT * FROM operacion where codigoOperacion = ?', [codigoOperacion]);
            if (operacion.length > 0) {
                return res.json(operacion[0]);
            }
            res.status(404).json({ message: 'No existe la operacion' });
        });
    }
}
const operacionController = new OperacionController();
exports.default = operacionController;
