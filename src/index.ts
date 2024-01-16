 import express from 'express';
import userRouter from '../src/routes/userRoutes'
import bodyParser from 'body-parser'
import authRouter from './routes/authRoute';
import { connectToDb } from './server/db';
const app = express();
const port = 3000;
app.use(bodyParser.json({limit: "30mb"}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))

app.use('/auth', authRouter)
app.use('/',userRouter)

app.listen(port, async () => {
  await connectToDb()
  console.log(`Server is running on http://localhost:${port}`);
});

 
