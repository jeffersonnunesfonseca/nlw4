import 'reflect-metadata'
import createConnection from './database';
// import create
import express from 'express';
import {router} from './routes';
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

export { app }