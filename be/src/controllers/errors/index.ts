import { Request, Response, NextFunction } from 'express';
import handleDevErrors from './dev';
import handleProdErrors from './prod';
import handleValidationErrors from './handlers/handle-validation-error';
import AppError from '../../utils/app-error';
import handleUniqueValueErrors from './handlers/handle-11000-error';

const globalError = (
  err: AppError | any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err.name === 'ValidationError') err = handleValidationErrors(err);
  if (err.code == 11000) err = handleUniqueValueErrors(err);

  // handling dev and prod env
  const prod = process.env.NODE_ENV === 'production';
  if (prod) handleProdErrors(err, res, next);
  else handleDevErrors(err, res, next);
};

export default globalError;
