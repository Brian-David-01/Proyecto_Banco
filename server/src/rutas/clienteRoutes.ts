import { Router } from "express";
import clienteController from "../controllers/clienteController";

class ClienteRoutes{
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',clienteController.lista);
        this.router.post('/',clienteController.nuevo);
        this.router.put('/:codigoCliente',clienteController.actualiza);
        this.router.delete('/:codigoCliente',clienteController.elimina);
        this.router.get('/:codigoCliente',clienteController.buscar);

    }
}
const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;