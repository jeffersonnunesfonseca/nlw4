# nlw4
Projeto da rocketseat nlw na trila de node

# Módulos
- [typeorm](https://typeorm.io/#/using-ormconfig) -  ORM baseado em entidades
- [express](https://expressjs.com/) - Framework para servidor
- [uuid](https://github.com/uuidjs/uuid) - gerador de ids únicos, como estamos usando uma ORM, pode ser que algum banco não comporte o autoincrement.
- [@types/express](https://www.npmjs.com/package/@types/express) - Permite visualizar métodos de henrança do express no modelo de typescript
- [jest](https://jestjs.io/docs/pt-BR/getting-started) - utilizado para realizar os testes
- [@types/jest](https://www.npmjs.com/package/@types/jest) - utilizado para setar a tipagem do pacote jest, recomendado para ambiente de dev
- [supertest](https://www.npmjs.com/package/supertest) - utilizado para simular fetchs, é utilizado junto com o jest
- [@types/supertest](https://www.npmjs.com/package/@types/supertest)
- [nodemailer](https://nodemailer.com/usage/) - utilizado para enviar email e tem um método de test que gera um link para visualizar como o email ira ficar
- [handlebars](https://handlebarsjs.com/) - auxiliar para criar views/templates de modo facil e dinâmico
- [yup validation]https://github.com/jquense/yup() - validador simples e objetivo de parametros
- [express-async-errors](https://www.npmjs.com/package/express-async-errors) - quando criamos um middleware para controlar erros é necessário ter essa lib

# Comandos
- gerar config do typescrypt `yarn tsc --init`
- subir aplicação em dev `yarn dev`
- listar opções da orm `yarn typeorm`

# Hashs
- aula1 = #rumoaoproximonivel
- aula2 = #jornadainfinita
- aula3 = #focopraticagrupo
- aula4 = #neverstoplearning
- aula5 = #missioncomplete

# Aprendizado das aulas
- [Aula-01](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-a0040fa51a764bdaaf5648fedbf6fb4d)
- [Aula-02](https://www.notion.so/Dia-2-Iniciando-com-o-Banco-de-Dados-ffa8a141872641b7b13338f339d7a69b)
- [Aula-03](https://www.notion.so/Dia-3-Testando-a-nossa-aplica-a-6b517e6d081241258009c640f7032cde)
- [Aula-04](https://www.notion.so/Dia-4-Envio-de-e-mail-1b85cb36f0a84e5e90a43e3acbce5674)
- [Aula-05]

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

# Rotas
- POST http://localhost:3333/users
- POST http://localhost:3333/surveys
- POST http://localhost:3333/sendMail
- GET  http://localhost:3333/nps/78ac997a-057e-4f38-9141-77e80505c3e6
- GET  http://localhost:3333/surveys
- GET  http://localhost:3333/answers/1?u=d124f015-10fc-48c6-9d10-ecde05f243ff
