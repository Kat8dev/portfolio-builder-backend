import { Router } from 'express';
import verification from '../helper/verifyToken.js';
import projectsControllers from '../controllers/projectControllers.js';

const router = Router();

router
  .route('/projects')
  .post(verification.verifyTokenAndAdmin, projectsControllers.createProject);

router
  .route('/projects/:id')
  .put(verification.verifyTokenAndAdmin, projectsControllers.updateProject);

router
  .route('/projects/:id')
  .delete(verification.verifyTokenAndAdmin, projectsControllers.deleteProject);

router.route('/projects/:id').get(projectsControllers.getProject);

router.route('/projects').get(projectsControllers.getAllProjects);

export default router;
