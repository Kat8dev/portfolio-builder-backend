import { Router } from 'express';
import verification from '../helper/verifyToken.js';
import projectsControllers from '../controllers/projectControllers.js';

const router = Router();

router
  .route('/projects')
  .post(verification.verifyToken, projectsControllers.createProject);

router
  .route('/projects/:id')
  .put(verification.verifyToken, projectsControllers.updateProject);

router
  .route('/projects/:id')
  .delete(verification.verifyToken, projectsControllers.deleteProject);

router.route('/projects/:id').get(projectsControllers.getProject);

router.route('/projects').get(projectsControllers.getAllProjects);

export default router;
