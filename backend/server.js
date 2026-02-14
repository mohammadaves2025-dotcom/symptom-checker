import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRouter.js'
import symptomRouter from './routes/symptomRouter.js';
import historyRouter from './routes/historyRouter.js';


//APP CONFIG
const app = express();
const port = process.env.PORT || 4000
const FrontEnd = process.env.FRONT_END_URL

connectDB();

//  MIDDLEWARES
app.use(express.json())

app.use(cors({
  origin: [
    "http://localhost:5173",            // local frontend
    FrontEnd                           // <-- replace with your frontend Vercel URL
  ],
  credentials: true
}))

//ROUTES

app.use('/api/user',userRouter);
app.use('/api/diagnosis',symptomRouter);
app.use('/api/history',historyRouter);



app.get('/',(req,res)=>{
    res.send("API working sir")
})


export default app;