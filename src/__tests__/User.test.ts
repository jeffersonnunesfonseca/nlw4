import request from 'supertest';
import  {app} from '../app';
import createConnection from '../database';

describe("Users", () =>{
    beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();
    })

    it("Should be able to create a new user", async ()=>{
        const response = await request(app).post("/users")
        .send({
            email: "teste@teste.com.br",
            name: "Name teste"
        });

        expect(response.status).toBe(201);
    })

    it("Should nor be able to create a new use with exist some email", async ()=>{
        const response = await request(app).post("/users")
        .send({
            email: "teste@teste.com.br",
            name: "Name teste"
        });

        expect(response.status).toBe(400);
    })
})