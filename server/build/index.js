"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./rutas/indexRoutes"));
const clienteRoutes_1 = __importDefault(require("./rutas/clienteRoutes"));
const operacionRoutes_1 = __importDefault(require("./rutas/operacionRoutes"));
const tipoCuentaRoutes_1 = __importDefault(require("./rutas/tipoCuentaRoutes"));
const tarjetaRoutes_1 = __importDefault(require("./rutas/tarjetaRoutes"));
const transaccionRoutes_1 = __importDefault(require("./rutas/transaccionRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/app/clientes', clienteRoutes_1.default);
        this.app.use('/app/operaciones', operacionRoutes_1.default);
        this.app.use('/app/tipoCuentas', tipoCuentaRoutes_1.default);
        this.app.use('/app/tarjetas', tarjetaRoutes_1.default);
        this.app.use('/app/transacciones', transaccionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();