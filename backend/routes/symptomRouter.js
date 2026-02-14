import express from 'express'
import {checkSymptoms} from '../controllers/checkSymptomController.js'
import {auth} from '../middlewares/auth.js'

const symptomRouter = express.Router();

symptomRouter.post('/diagnose',auth,checkSymptoms);


export default symptomRouter;