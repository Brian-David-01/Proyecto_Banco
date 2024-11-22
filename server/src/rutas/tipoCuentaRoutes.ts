import { Router } from "express";
import tipoCuentaController from "../controllers/tipoCuentaController";

class TipoCuentaRoutes{
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',tipoCuentaController.lista);
        this.router.post('/',tipoCuentaController.nuevo);
        this.router.put('/:codigoCuenta',tipoCuentaController.actualiza);
        this.router.delete('/:codigoCuenta',tipoCuentaController.elimina);
        this.router.get('/:codigoCuenta',tipoCuentaController.buscar);

    }
}
const tipoCuentaRoutes = new TipoCuentaRoutes();
export default tipoCuentaRoutes.router;