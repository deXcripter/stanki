import express from 'express';
import morgan from 'morgan';
import { authRouter } from './routes/general/auth-route';
import globalError from './controllers/errors';
import cors from 'cors';
import { educatorQuizRouter } from './routes/educator/quiz-rotue';
import restrictTo from './middlewares/restrictTo';
import protect from './middlewares/protect';
import { profileRouter } from './routes/general/profile-settings';
import { EducatorResourceRouter } from './routes/educator/resource-route';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res) => res.send('Welcome to Stanki API'));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/profile', protect, profileRouter);
app.use('/api/v1/quiz', protect, restrictTo('educator'), educatorQuizRouter);
app.use(
  '/api/v1/course',
  protect,
  restrictTo('educator'),
  EducatorResourceRouter,
);
app.use('*', (req, res) =>
  res
    .status(404)
    .send(`Can't find ${req.method} : ${req.originalUrl} on this server!`),
);
app.use(globalError);

export default app;
