import express from 'express';
import userRouter from './routes/students';

const app = express();

// routes
app.use('/user', userRouter);

// exporting using default
export default app;
