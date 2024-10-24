import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import { iApiResponse, iQuiz } from '../../interfaces';
import Quiz from '../../models/quiz-model';
import AppError from '../../utils/app-error';

const createQuiz: RequestHandler = async (req, res, next) => {
  //
  const { title, questions } = req.body as {
    title: string;
    questions: string[];
  };

  console.log(req.user);

  if (!title || !questions)
    return next(new AppError('title and qestions required', 400));

  if (questions.length < 2) {
    return next(
      new AppError('Quizzes should have at least two questions in it', 400),
    );
  }

  questions;

  const payload = {
    title,
    questions,
    creatorId: req.user._id,
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
