// cores
import express from 'express';
import globalErrorHandler from './controllers/globalErrorHandler';
import morgan from 'morgan';

// app
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('api/v1');
app.use(globalErrorHandler);

// exporting app
export default app;
