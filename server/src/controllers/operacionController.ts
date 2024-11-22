import { request, Request, Response, text } from "express";
import pool from "../database";

class OperacionController {
    public async lista(req: Request, res: Response){
        const operacion = await pool.query('SELECT * FROM operacion');
        res.json(operacion);
    }
    public async nuevo(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO operacion set ?',[req.body]);
        res.json({message: 'Se guardo una operacion'});
    }
    public async actualiza(req: Request, res: Response){
        const {codigoOperacion} = req.params;
        await pool.query('UPDATE operacion SET ? where codigoOperacion = ?',[req.body,codigoOperacion]);
        res.json({message: 'Se modifico exitosamente la operacion'});
    }
    public async elimina(req: Request, res: Response){
        const {codigoOperacion} = req.params;
        await pool.query('DELETE FROM operacion where codigoOperacion = ?',[codigoOperacion]);
        res.json({message: 'Se borro exitosamente la operacion'});
    }
    public async buscar(req: Request, res: Response){
        const {codigoOperacion} = req.params;
        const operacion = await pool.query('SELECT * FROM operacion where codigoOperacion = ?',[codigoOperacion]);
        if(operacion.length > 0){
            return res.json(operacion[0]);
        }
        res.status(404).json({message: 'No existe la operacion'});
    }
}

const operacionController = new OperacionController();

export default operacionController;