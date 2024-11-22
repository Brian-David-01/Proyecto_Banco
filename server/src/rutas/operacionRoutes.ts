import { Router } from "express";
import operacionController from "../controllers/operacionController";

class OperacionRoutes{
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',operacionController.lista);
        this.router.post('/',operacionController.nuevo);
        this.router.put('/:codigoOperacion',operacionController.actualiza);
        this.router.delete('/:codigoOperacion',operacionController.elimina);
        this.router.get('/:codigoOperacion',operacionController.buscar);

    }
}
const operacionRoutes = new OperacionRoutes();
export default operacionRoutes.router;