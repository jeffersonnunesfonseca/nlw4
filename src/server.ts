import express from 'express';

const app = express();

/**
 * GET => BUSCA
 * POST => SALVAR
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH => ALTERACAO ESPECIFICA
 */

app.get("/", (request, response) => {
    // return response.send("Hello World Nlw4");
    return response.json({ message: "Hello World Nlw4"});
});

app.post("/", (request, response) => {
    return response.json({ message: "Dados salvo com sucesso"});
});

app.listen(3333,() => console.log("Servidor nlw4 rodando!"));