import { Request, Response, text } from "express";

class IndexController {
    public index(req: Request, res: Response){
        res.json({text: 'Puedes acceder a /app/clientes'});
    }
}

export const indexController = new IndexController();
