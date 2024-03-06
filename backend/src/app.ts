// cores
import express, { NextFunction, Request, Response } from 'express';
import globalErrorHandler from './controllers/globalErrorHandler';
import morgan from 'morgan';
import versionOne from './v1';
import appError from './utils/appError';
import notFound from './controllers/notFound';

// app
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', versionOne);
app.use('*', notFound);
app.use(globalErrorHandler);

// exporting app
export default app;
