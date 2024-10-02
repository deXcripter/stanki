import { NextFunction, Response } from 'express';
import AppError from '../../utils/app-error';

const handleDevErrors = (err: AppError, res: Response, next: NextFunction) => {
  // final
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Something went terribly wrong';

  console.log(err);

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

export default handleDevErrors;
