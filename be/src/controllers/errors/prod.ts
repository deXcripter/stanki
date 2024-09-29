import { NextFunction, Response } from 'express';
import AppError from '../../utils/app-error';

const handleProdErrors = (err: AppError, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

export default handleProdErrors;
