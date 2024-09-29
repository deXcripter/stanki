import { Request, Response, NextFunction } from 'express';

type AsyncHandlerFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

const asyncHandler = (fn: AsyncHandlerFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default asyncHandler;