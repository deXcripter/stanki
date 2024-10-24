import express from 'express';
import protect from '../../middlewares/protect';
import {
  createQuiz,
  deleteQuiz,
  getAllQuizByEducator,
} from '../../controllers/quiz';
import restrictTo from '../../middlewares/restrictTo';
const router = express.Router();

router.all('protect', restrictTo('educator'));
router.route('/').post(createQuiz);
router.get(
  '/quiz-educator',
  protect,
  restrictTo('educator'),
  getAllQuizByEducator,
);
router.route('/:id').delete(deleteQuiz);

export { router as educatorQuizRouter };
