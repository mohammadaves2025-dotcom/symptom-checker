import expres from 'express'
import {addHistory ,getUserHistory} from '../controllers/historyController.js'
import {auth} from '../middlewares/auth.js'


const historyRouter = expres.Router();

historyRouter.post('/add',auth, addHistory);
historyRouter.get('/userhistory',auth,  getUserHistory);


export default historyRouter;