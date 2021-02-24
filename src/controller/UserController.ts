import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";
class UserController{
    
    async create(request: Request,response: Response) {
        const {name, email} = request.body;

        const usersRepository = getRepository(User);
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

        response.json(user);
    }
}
export {
    UserController
}