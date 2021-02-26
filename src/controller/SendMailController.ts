import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsesrRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendMailService from "../services/SendMailService";
import {resolve} from 'path';

class SendMailController {

    async execute(request: Request,response: Response){
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userExists = await usersRepository.findOne({
            email
        })

        if(!userExists){
            return response.status(400).json({
                error: "User does not exists"
            })
        }

        const surveyExists = await surveysRepository.findOne({
            id: survey_id
        })

        if(!surveyExists){
            return response.status(400).json({
                error: "Survey does not exists"
            })
        }

        const surveyUserExist = await surveysUsersRepository.findOne({
            where:[
                {
                    user_id:userExists.id
                },
                {
                    value: null
                }
            ],
            relations: ["user", "survey"]
        })
        // enviar e-mail para o usuario
        const npsPath = resolve(__dirname,"..","views","emails","npsMail.hbs");
        const variables = {
            name: userExists.name,
            title: surveyExists.title,
            description: surveyExists.description,
            user_id: userExists.id,
            link:process.env.URL_MAIL
        }

        if(surveyUserExist){
            await SendMailService.execute(email,surveyExists.title, variables, npsPath);
            return response.status(201).json(surveyUserExist);
        }
        // salvar info na tabela surveysUsers
        const surveyUser = surveysUsersRepository.create({
            user_id: userExists.id,
            survey_id
        });

        await surveysUsersRepository.save(surveyUser);


        await SendMailService.execute(email,surveyExists.title, variables, npsPath);

        return response.status(201).json(surveyUser);
    }

}

// export default new SendMailController;
export  { SendMailController };