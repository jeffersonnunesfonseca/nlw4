import 'reflect-metadata'
import './database';
import express from 'express';
import {router} from './routes';
const app = express();

/**
 * GET => BUSCA
 * POST => SALVAR
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH => ALTERACAO ESPECIFICA
 */

app.use(express.json());
app.use(router);

app.listen(3333,() => console.log("Servidor nlw4 rodando!"));