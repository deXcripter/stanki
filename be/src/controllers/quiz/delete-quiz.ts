import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import mQuiz from '../../models/quiz-model';
import AppError from '../../utils/app-error';

const deleteQuiz: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  const quiz = await mQuiz.findByIdAndDelete(id);
  if (!quiz) return next(new AppError('No quiz found with that ID', 404));

  return res.status(204).json({
    status: 'success',
    data: null,
  });
};

export default asyncHandler(deleteQuiz);
