import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsesrRepository";

/**
 * 
 * Detratores => 0 -6
 * Passivos => 7 -8
 * Promotores => 9 -10
 * 
 * (promotores - detratores) / (numero respondentes) x 100
 * 
 */

class NpsController {
    async execute(request: Request, response: Response){

        const { survey_id } = request.params;
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveysUsers = await surveysUsersRepository.find({
            survey_id,
            value:Not(IsNull())
        });
        // console.log(surveysUsers)

        const detractor = surveysUsers.filter((survey) =>{
            return survey.value >=0 && survey.value <=6;
        });

        const promoters = surveysUsers.filter((survey) =>{
            return survey.value >=9 && survey.value <=10;
        });

        // // nao entra no calculo
        const passives = surveysUsers.filter((survey) =>{
            return survey.value >=7 && survey.value <=8;
        });


        const totalAnswers = surveysUsers.length;

        const calculate = ((promoters.length - detractor.length) / totalAnswers) *100;

        return response.json({
            detractor,
            promoters,
            passives,
            totalAnswers,
            nps: calculate
        });
    }

}

export { NpsController }