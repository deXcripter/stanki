import { Router } from 'express';
import signup from '../../controllers/auth/signup';
import changePassword from '../../controllers/auth/change-password';

const router = Router();

router.post('/signup', signup);
router.post('/change-password', changePassword);

export default router;
