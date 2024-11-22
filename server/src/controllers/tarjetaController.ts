import { request, Request, Response, text } from "express";
import pool from "../database";

class TarjetaController {
    public async lista(req: Request, res: Response){
        const tarjeta = await pool.query('SELECT * FROM tarjeta');
        res.json(tarjeta);
    }
    public async nuevo(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tarjeta set ?',[req.body]);
        res.json({message: 'Se guardo una tarjeta'});
    }
    public async actualiza(req: Request, res: Response){
        const {numTarjeta} = req.params;
        await pool.query('UPDATE tarjeta SET ? where numTarjeta = ?',[req.body,numTarjeta]);
        res.json({message: 'Se modifico exitosamente la Tarjeta'});
    }
    public async elimina(req: Request, res: Response){
        const {numTarjeta} = req.params;
        await pool.query('DELETE FROM tarjeta where numTarjeta = ?',[numTarjeta]);
        res.json({message: 'Se borro exitosamente la Tarjeta'});
    }
    public async buscar(req: Request, res: Response){
        const {numTarjeta} = req.params;
        const tarjeta = await pool.query('SELECT * FROM tarjeta where numTarjeta = ?',[numTarjeta]);
        if(tarjeta.length > 0){
            return res.json(tarjeta[0]);
        }
        res.status(404).json({message: 'No existe la Tarjeta'});
    }
}

const tarjetaController = new TarjetaController();

export default tarjetaController;