import { request, Request, Response, text } from "express";
import pool from "../database";

class ClienteController {
    public async lista(req: Request, res: Response) {
        const cliente = await pool.query('SELECT * FROM cliente');
        res.json(cliente);  // Verifica si 'cliente' es un array
    }
    
    public async nuevo(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO cliente set ?',[req.body]);
        res.json({message: 'Se guardo un cliente'});
    }
    public async actualiza(req: Request, res: Response){
        const {codigoCliente} = req.params;
        await pool.query('UPDATE cliente SET ? where codigoCliente = ?',[req.body,codigoCliente]);
        res.json({message: 'Se modifico exitosamente el Cliente'});
    }
    public async elimina(req: Request, res: Response){
        const {codigoCliente} = req.params;
        await pool.query('DELETE FROM cliente where codigoCliente = ?',[codigoCliente]);
        res.json({message: 'Se borro exitosamente el Cliente'});
    }
    public async buscar(req: Request, res: Response){
        const {codigoCliente} = req.params;
        const cliente = await pool.query('SELECT * FROM cliente where codigoCliente = ?',[codigoCliente]);
        if(cliente.length > 0){
            return res.json(cliente[0]);
        }
        res.status(404).json({message: 'No existe el Cliente'});
    }
}

const clienteController = new ClienteController();

export default clienteController;