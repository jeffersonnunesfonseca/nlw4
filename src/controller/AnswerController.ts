import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsesrRepository";

class AnswerController {

    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveyUserRepository = getCustomRepository(SurveysUsersRepository);
        const surveyUser = await surveyUserRepository.findOne({
            id: String(u)
        });


        if(!surveyUser){
            throw new AppError("Survey User does not exists!",400);
        }
        surveyUser.value = Number(value);

        await surveyUserRepository.save(surveyUser);
        
        return response.json(surveyUser);

    }
}

export { AnswerController }