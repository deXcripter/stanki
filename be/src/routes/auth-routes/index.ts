import { Router } from 'express';
import signup from '../../controllers/auth/signup';
import changePassword from '../../controllers/auth/change-password';
import signin from '../../controllers/auth/signin';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/change-password', changePassword);

export default router;
