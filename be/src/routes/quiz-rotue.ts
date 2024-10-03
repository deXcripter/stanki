import express from 'express';
import protect from '../middlewares/protect';
import { createQuiz, getAllQuizByEducator } from '../controllers/quiz';
const router = express.Router();

router.route('/').post(protect, createQuiz);
router.get('/educator', getAllQuizByEducator);

export { router as quizRouter };
