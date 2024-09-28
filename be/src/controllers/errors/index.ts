import { Request, Response, NextFunction } from 'express';

const globalError = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).json({
    status: 'error',
    message: err.message,
    error: err,
  });
};

export default globalError;
