import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {};

export default globalErrorHandler;
