import 'reflect-metadata'
import createConnection from './database';
// import create
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'; 
import {router} from './routes';
import { AppError } from './errors/AppError';
const app = express();

//cria conexao com bancp
createConnection();

/**
 * GET => BUSCA
 * POST => SALVAR
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH => ALTERACAO ESPECIFICA
 */

app.use(express.json());
app.use(router);


//middleware custom erro
app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {

    if( err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`
    });

})

export { app }