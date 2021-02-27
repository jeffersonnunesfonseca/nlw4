import {Router } from 'express';
import { AnswerController } from './controller/AnswerController';
import { NpsController } from './controller/NpsController';
import { SendMailController } from './controller/SendMailController';
import { SurveysController } from './controller/SurveysController';
import { UserController } from './controller/UserController';


const router = Router();
const userController = new UserController();
const surveyController = new SurveysController;
const sendMailController = new SendMailController();
const answersController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post("/surveys", surveyController.create);
router.post("/sendMail", sendMailController.execute);

router.get("/surveys", surveyController.show);

router.get("/answers/:value", answersController.execute);

router.get("/nps/:survey_id", npsController.execute);

export {
    router
};