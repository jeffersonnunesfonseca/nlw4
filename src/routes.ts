import {Router } from 'express';
import { SendMailController } from './controller/SendMailController';
import { SurveysController } from './controller/SurveysController';
import { UserController } from './controller/UserController';


const router = Router();
const userController = new UserController();
const surveyController = new SurveysController;
const sendMailController = new SendMailController();

router.post("/users", userController.create);
router.post("/surveys", surveyController.create);
router.post("/sendMail", sendMailController.execute);

router.get("/surveys", surveyController.show);

export {
    router
};