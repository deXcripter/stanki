import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import { iApiResponse, iQuiz } from '../../interfaces';
import Quiz from '../../models/quiz-model';

const createQuiz: RequestHandler = async (
  req,
  res,
  next,
): Promise<iApiResponse<iQuiz>> => {
  //
  const { title, questions } = req.body;

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
