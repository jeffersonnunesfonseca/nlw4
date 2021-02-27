import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from 'yup';
import { AppError } from "../errors/AppError";

class UserController{
    
    async create(request: Request,response: Response) {
        const {name, email} = request.body;

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required()
        })

        try {
            await schema.validate(request.body,{abortEarly: false});
        } catch (err) {
            throw new AppError(err,400);
        }

        // cria instancia de dados do usuario
        const usersRepository = getCustomRepository(UsersRepository);
        const userExists = await usersRepository.findOne({
            email
        });

        if(userExists){
            throw new AppError("user already exists",400);
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