import { Request, Response, NextFunction } from 'express';
import handleDevErrors from './dev';
import handleProdErrors from './prod';
import handleValidationErrors from './handlers/handle-validation-error';
import AppError from '../../utils/app-error';
import handleUniqueValueErrors from './handlers/handle-11000-error';

const globalError = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error: any = JSON.parse(JSON.stringify(err));

  if (error.name === 'ValidationError') error = handleValidationErrors(err);
  if (error.code == 11000) error = handleUniqueValueErrors(err);

  // handling dev and prod env
  const prod = process.env.NODE_ENV === 'production';
  if (prod) handleProdErrors(error, res, next);
  else handleDevErrors(error, res, next);
};

export default globalError;
