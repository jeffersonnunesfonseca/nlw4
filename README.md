# nlw4
Projeto da rocketseat nlw na trila de node

# Módulos
- [typeorm](https://typeorm.io/#/using-ormconfig) -  ORM baseado em entidades
- [express](https://expressjs.com/) - Framework para servidor
- [uuid](https://github.com/uuidjs/uuid) - gerador de ids únicos, como estamos usando uma ORM, pode ser que algum banco não comporte o autoincrement.

# Comandos
- subir aplicação em dev `yarn dev`
- listar opções da orm `yarn typeorm`

# Hashs
- aula1 = #rumoaoproximonivel
- aula2 = #jornadainfinita

# Aprendizado das aulas
- [Aula-01](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-a0040fa51a764bdaaf5648fedbf6fb4d)
- [Aula-02](https://www.notion.so/Dia-2-Iniciando-com-o-Banco-de-Dados-ffa8a141872641b7b13338f339d7a69b)

# Observação
- o node por padrão não entende o formato .ts que é nosso typescript sendo necessário utilizarmos um transpilador chamado [typscript](https://www.typescriptlang.org/docs/), para rodar algum script deve chamar `ts-node-dev src/server.ts` e não `node src/server.ts` .
