import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import Quiz from '../../models/quiz-model';
import AppError from '../../utils/app-error';

const updateQuiz: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const { title, questions } = req.body;
  const payload = {
    title,
    questions,
  };

  const quiz = await Quiz.findByIdAndUpdate(id, payload, { new: true });
  if (!quiz) return next(new AppError('No quiz found with that ID', 404));

  return res.status(200).json({
    status: 'success',
    data: {
      quiz,
    },
  });
};

export default asyncHandler(updateQuiz);
