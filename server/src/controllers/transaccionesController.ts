import { request, Request, Response, text } from "express";
import pool from "../database";

class TransaccionesController {
    public async lista(req: Request, res: Response){
        const transacciones = await pool.query('SELECT * FROM transacciones');
        res.json(transacciones);
    }
    public async nuevo(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO transacciones set ?',[req.body]);
        res.json({message: 'Se guardo una transaccion'});
    }
    public async actualiza(req: Request, res: Response){
        const {codigoTransaccion} = req.params;
        await pool.query('UPDATE transacciones SET ? where codigoTransaccion = ?',[req.body,codigoTransaccion]);
        res.json({message: 'Se modifico exitosamente la transaccion'});
    }
    public async elimina(req: Request, res: Response){
        const {codigoTransaccion} = req.params;
        await pool.query('DELETE FROM transacciones where codigoTransaccion = ?',[codigoTransaccion]);
        res.json({message: 'Se borro exitosamente la transaccion'});
    }
    public async buscar(req: Request, res: Response){
        const {codigoTransaccion} = req.params;
        const transacciones = await pool.query('SELECT * FROM transacciones where codigoTransaccion = ?',[codigoTransaccion]);
        if(transacciones.length > 0){
            return res.json(transacciones[0]);
        }
        res.status(404).json({message: 'No existe la transaccion'});
    }
}

const transaccionController = new TransaccionesController();

export default transaccionController;