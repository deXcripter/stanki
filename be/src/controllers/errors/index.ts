import { Request, Response, NextFunction } from 'express';
import handleDevErrors from './dev';
import handleProdErrors from './prod';
import handleValidationErrors from './handlers/handle-validation-error';
import AppError from '../../utils/app-error';

const globalError = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error: any = JSON.parse(JSON.stringify(err));
  const prod = false;

  if (err.name === 'ValidationError') error = handleValidationErrors(err);

  console.log(error, err);

  if (!prod) handleDevErrors(error, res, next);
  if (prod) handleProdErrors(error, res, next);
};

export default globalError;
