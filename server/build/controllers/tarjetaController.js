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
class TarjetaController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tarjeta = yield database_1.default.query('SELECT * FROM tarjeta');
            res.json(tarjeta);
        });
    }
    nuevo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO tarjeta set ?', [req.body]);
            res.json({ message: 'Se guardo una tarjeta' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numTarjeta } = req.params;
            yield database_1.default.query('UPDATE tarjeta SET ? where numTarjeta = ?', [req.body, numTarjeta]);
            res.json({ message: 'Se modifico exitosamente la Tarjeta' });
        });
    }
    elimina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numTarjeta } = req.params;
            yield database_1.default.query('DELETE FROM tarjeta where numTarjeta = ?', [numTarjeta]);
            res.json({ message: 'Se borro exitosamente la Tarjeta' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numTarjeta } = req.params;
            const tarjeta = yield database_1.default.query('SELECT * FROM tarjeta where numTarjeta = ?', [numTarjeta]);
            if (tarjeta.length > 0) {
                return res.json(tarjeta[0]);
            }
            res.status(404).json({ message: 'No existe la Tarjeta' });
        });
    }
}
const tarjetaController = new TarjetaController();
exports.default = tarjetaController;
