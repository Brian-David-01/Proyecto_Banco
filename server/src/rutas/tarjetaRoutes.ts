import { Router } from "express";
import tarjetaController from "../controllers/tarjetaController";

class TarjetaRoutes{
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',tarjetaController.lista);
        this.router.post('/',tarjetaController.nuevo);
        this.router.put('/:numTarjeta',tarjetaController.actualiza);
        this.router.delete('/:numTarjeta',tarjetaController.elimina);
        this.router.get('/:numTarjeta',tarjetaController.buscar);

    }
}
const tarjetaRoutes = new TarjetaRoutes();
export default tarjetaRoutes.router;