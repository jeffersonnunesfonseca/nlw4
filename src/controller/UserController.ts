import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController{
    
    async create(request: Request,response: Response) {
        const {name, email} = request.body;
        // cria instancia de dados do usuario
        const usersRepository = getCustomRepository(UsersRepository);
        const userExists = await usersRepository.findOne({
            email
        });

        if(userExists){
            return response.status(400).json({
                error: "user already exists"
            })
        }
        const user = usersRepository.create({
            name,email
        });

        await usersRepository.save(user);

        response.status(201).json(user);
    }
}
export {
    UserController
}