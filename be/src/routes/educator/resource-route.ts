import express from 'express';
import createResource from '../../controllers/resources/create-resource';
import getCourseResources from '../../controllers/resources/get-resource';
import multer from 'multer';
import deleteResource from '../../controllers/resources/delete-resource';

const upload = multer({ dest: 'resources/' });

const Router = express.Router();

Router.route('/')
  .post(upload.single('file'), createResource)
  .get(getCourseResources);

Router.route('/:id').delete(deleteResource);

export { Router as EducatorResourceRouter };
