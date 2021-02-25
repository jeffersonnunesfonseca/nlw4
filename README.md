# nlw4
Projeto da rocketseat nlw na trila de node

# Módulos
- [typeorm](https://typeorm.io/#/using-ormconfig) -  ORM baseado em entidades
- [express](https://expressjs.com/) - Framework para servidor
- [uuid](https://github.com/uuidjs/uuid) - gerador de ids únicos, como estamos usando uma ORM, pode ser que algum banco não comporte o autoincrement.
 - [@types/express](https://www.npmjs.com/package/@types/express) - Permite visualizar métodos de henrança do express no modelo de typescript

# Comandos
- gerar config do typescrypt `yarn tsc --init`
- subir aplicação em dev `yarn dev`
- listar opções da orm `yarn typeorm`

# Hashs
- aula1 = #rumoaoproximonivel
- aula2 = #jornadainfinita
- aula3 = #focopraticagrupo

# Aprendizado das aulas
- [Aula-01](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-a0040fa51a764bdaaf5648fedbf6fb4d)
- [Aula-02](https://www.notion.so/Dia-2-Iniciando-com-o-Banco-de-Dados-ffa8a141872641b7b13338f339d7a69b)
- [Aula-03](https://www.notion.so/Dia-3-Testando-a-nossa-aplica-a-6b517e6d081241258009c640f7032cde)

# Observação
- o node por padrão não entende o formato .ts que é nosso typescript sendo necessário utilizarmos um transpilador chamado [typscript](https://www.typescriptlang.org/docs/), para rodar algum script deve chamar `ts-node-dev src/server.ts` e não `node src/server.ts` .


# Testes Automatizados
- 1 : Testes unitários
    - começar o teste para depois começar a aplicação
    - será utilizado mocks para testar dados

- 2 : Testes de integração
    - Request
        - testar rotas
        - testar controllers
        - testa repositorio
    - Response
        - testa resposta do repositorio
        - testa resposta do controller
        - testa resposta rota

- 3 : Ponta  a ponta (E2E)
    - testa desde o frontend até o backend, desce um clique no botão


<!-- yarn add jest @types/jest -D
yarn add ts-jest
yarn add supertest @types/supertest -D
 -->