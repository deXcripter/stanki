import { Router } from 'express';
import { signup } from '../controllers/user-controller';
const Route = Router();

Route.route('/').get().post(signup).patch().delete();

export default Route;
