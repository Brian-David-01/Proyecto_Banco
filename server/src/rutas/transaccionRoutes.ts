import { Router } from "express";
import transaccionController from "../controllers/transaccionesController";

class TransaccionesRoutes{
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',transaccionController.lista);
        this.router.post('/',transaccionController.nuevo);
        this.router.put('/:codigoTransaccion',transaccionController.actualiza);
        this.router.delete('/:codigoTransaccion',transaccionController.elimina);
        this.router.get('/:codigoTransaccion',transaccionController.buscar);

    }
}
const transaccionesRoutes = new TransaccionesRoutes();
export default transaccionesRoutes.router;