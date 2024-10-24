import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import { iApiResponse, iQuiz } from '../../interfaces';
import Quiz from '../../models/quiz-model';
import AppError from '../../utils/app-error';

const createQuiz: RequestHandler = async (req, res, next) => {
  //
  const { title, questions } = req.body;

  if (!title || !questions)
    return next(new AppError('title and qestions required', 400));

  const payload = {
    title,
    questions,
    creatorId: req.user.id,
  };

  const quiz: iQuiz = await Quiz.create(payload);

  return res.status(201).json({
    success: true,
    data: {
      quiz,
    },
  });
};

export default asyncHandler(createQuiz);
