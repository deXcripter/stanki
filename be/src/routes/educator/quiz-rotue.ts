import express from 'express';
import protect from '../../middlewares/protect';
import { createQuiz, getAllQuizByEducator } from '../../controllers/quiz';
import restrictTo from '../../middlewares/restrictTo';
const router = express.Router();

router.all('protect', restrictTo('educator'));
router.route('/').post(protect, createQuiz);
router.get('/quiz-educator', protect, getAllQuizByEducator);

export { router as quizRouter };
