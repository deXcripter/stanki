import express from 'express';
import { getUser, updateProfile } from '../../controllers/user';
const Router = express.Router();

Router.route('/').patch(updateProfile).get(getUser);

export { Router as profileRouter };
