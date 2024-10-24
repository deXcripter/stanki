import express from 'express';
import editProfile from '../../controllers/user/edit-profile';
const Router = express.Router();

Router.patch('/', editProfile);

export { Router as profileRouter };
