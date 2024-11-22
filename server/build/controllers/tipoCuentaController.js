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
class TipoCuentaController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoCuenta = yield database_1.default.query('SELECT * FROM tipoCuenta');
            res.json(tipoCuenta);
        });
    }
    nuevo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO tipoCuenta set ?', [req.body]);
            res.json({ message: 'Se guardo un tipo de cuenta' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoCuenta } = req.params;
            yield database_1.default.query('UPDATE tipoCuenta SET ? where codigoCuenta = ?', [req.body, codigoCuenta]);
            res.json({ message: 'Se modifico exitosamente el tipo de cuenta' });
        });
    }
    elimina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoCuenta } = req.params;
            yield database_1.default.query('DELETE FROM tipoCuenta where codigoCuenta = ?', [codigoCuenta]);
            res.json({ message: 'Se borro exitosamente el tipo de cuenta' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoCuenta } = req.params;
            const tipoCuenta = yield database_1.default.query('SELECT * FROM tipoCuenta where codigoCuenta = ?', [codigoCuenta]);
            if (tipoCuenta.length > 0) {
                return res.json(tipoCuenta[0]);
            }
            res.status(404).json({ message: 'No existe el tipo de cuenta' });
        });
    }
}
const tipoCuentaController = new TipoCuentaController();
exports.default = tipoCuentaController;
