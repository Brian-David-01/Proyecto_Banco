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
class ClienteController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield database_1.default.query('SELECT * FROM cliente');
            res.json(cliente); // Verifica si 'cliente' es un array
        });
    }
    nuevo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO cliente set ?', [req.body]);
            res.json({ message: 'Se guardo un cliente' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoCliente } = req.params;
            yield database_1.default.query('UPDATE cliente SET ? where codigoCliente = ?', [req.body, codigoCliente]);
            res.json({ message: 'Se modifico exitosamente el Cliente' });
        });
    }
    elimina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoCliente } = req.params;
            yield database_1.default.query('DELETE FROM cliente where codigoCliente = ?', [codigoCliente]);
            res.json({ message: 'Se borro exitosamente el Cliente' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoCliente } = req.params;
            const cliente = yield database_1.default.query('SELECT * FROM cliente where codigoCliente = ?', [codigoCliente]);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            res.status(404).json({ message: 'No existe el Cliente' });
        });
    }
}
const clienteController = new ClienteController();
exports.default = clienteController;
