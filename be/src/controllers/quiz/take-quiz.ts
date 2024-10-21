import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import Quiz from '../../models/quiz-model';
import AppError from '../../utils/app-error';

const partakeQuiz: RequestHandler = async (req, res, next) => {
  const { quizId } = req.params as { quizId: string };

  const quiz = await Quiz.findById(quizId);
  if (!quiz) return next(new AppError('Quiz not found', 404));

  if (!quiz.registeredStudents.includes(req.user._id))
    return next(
      new AppError(
        'You are not registered for this cours, hence cannot partake in this quiz',
        403,
      ),
    );

  return res.status(200).json({
    status: 'success',
    data: {
      quiz,
    },
  });
};

export default asyncHandler(partakeQuiz);
