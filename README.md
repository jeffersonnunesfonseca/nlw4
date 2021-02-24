# nlw4
Projeto da rocketseat nlw na trila de node

# modulos
    - [typeorm](https://typeorm.io/#/using-ormconfig) -  ORM baseado em entidades
    - [express](https://expressjs.com/) - Framework para servidor
    - [uuid](https://github.com/uuidjs/uuid) - gerador de ids únicos, como estamos usando uma ORM, pode ser que algum banco não comporte o autoincrement.

# comandos
    - subir aplicação em dev `yarn dev`
    - listar opções da orm `yarn typeorm`

# hash
    - aula1 = #rumoaoproximonivel
    - aula2 = #jornadainfinita

# Observação
    - o node por padrão não entende o formato .ts que é nosso typescript sendo necessário utilizarmos um transpilador chamado [typscript](https://www.typescriptlang.org/docs/), para rodar algum script deve chamar `ts-node-dev src/server.ts` e não `node src/server.ts`.
