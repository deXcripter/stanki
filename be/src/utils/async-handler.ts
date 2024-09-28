import { NextFunction, Request, Response } from 'express';

const asyncHandler = (asyncFunction: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    asyncFunction(req, res, next).catch(next);
  };
};

export default asyncHandler;
