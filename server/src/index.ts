import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./rutas/indexRoutes";
import clienteRoutes from "./rutas/clienteRoutes";
import operacionRoutes from "./rutas/operacionRoutes";
import tipoCuentaRoutes from "./rutas/tipoCuentaRoutes";
import tarjetaRoutes from "./rutas/tarjetaRoutes";
import transaccionRoutes from "./rutas/transaccionRoutes";

class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.rutas();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    rutas(): void{
        this.app.use(indexRoutes);
        this.app.use('/app/clientes',clienteRoutes);
        this.app.use('/app/operaciones',operacionRoutes);
        this.app.use('/app/tipoCuentas',tipoCuentaRoutes);
        this.app.use('/app/tarjetas',tarjetaRoutes);
        this.app.use('/app/transacciones',transaccionRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'),() => {
            console.log('Servidor en puerto',this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();