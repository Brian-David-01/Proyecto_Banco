import { request, Request, Response, text } from "express";
import pool from "../database";

class TipoCuentaController {
    public async lista(req: Request, res: Response){
        const tipoCuenta = await pool.query('SELECT * FROM tipoCuenta');
        res.json(tipoCuenta);
    }
    public async nuevo(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tipoCuenta set ?',[req.body]);
        res.json({message: 'Se guardo un tipo de cuenta'});
    }
    public async actualiza(req: Request, res: Response){
        const {codigoCuenta} = req.params;
        await pool.query('UPDATE tipoCuenta SET ? where codigoCuenta = ?',[req.body,codigoCuenta]);
        res.json({message: 'Se modifico exitosamente el tipo de cuenta'});
    }
    public async elimina(req: Request, res: Response){
        const {codigoCuenta} = req.params;
        await pool.query('DELETE FROM tipoCuenta where codigoCuenta = ?',[codigoCuenta]);
        res.json({message: 'Se borro exitosamente el tipo de cuenta'});
    }
    public async buscar(req: Request, res: Response){
        const {codigoCuenta} = req.params;
        const tipoCuenta = await pool.query('SELECT * FROM tipoCuenta where codigoCuenta = ?',[codigoCuenta]);
        if(tipoCuenta.length > 0){
            return res.json(tipoCuenta[0]);
        }
        res.status(404).json({message: 'No existe el tipo de cuenta'});
    }
}

const tipoCuentaController = new TipoCuentaController();

export default tipoCuentaController;