import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth-routes';
import globalError from './controllers/errors';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoute);
app.use('*', (req, res) =>
  res
    .status(404)
    .send(`Can't find ${req.method} : ${req.originalUrl} on this server!`),
);
app.use(globalError);

export default app;
