import express from 'express';
import morgan from 'morgan';
import { authRouter } from './routes/general/auth-route';
import globalError from './controllers/errors';
import cors from 'cors';
import { quizRouter } from './routes/educator/quiz-rotue';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/quiz', quizRouter);
app.use('*', (req, res) =>
  res
    .status(404)
    .send(`Can't find ${req.method} : ${req.originalUrl} on this server!`),
);
app.use(globalError);

export default app;
