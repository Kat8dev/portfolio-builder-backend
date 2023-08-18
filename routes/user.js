import verifications from '../helper/verifyToken.js';
import { Router } from 'express';
import userControllers from '../controllers/userControllers.js';

const router = Router();

router
  .route('/users/:id')
  .put(verifications.verifyTokenAndAuthorization, userControllers.updateUser);

router.route('/users/:id').delete(userControllers.deleteUser);

router
  .route('/users/:id')
  .get(verifications.verifyTokenAndAdmin, userControllers.getUser);

router
  .route('/users')
  .get(verifications.verifyTokenAndAdmin, userControllers.getAllUsers);

router
  .route('/users/stats')
  .get(verifications.verifyTokenAndAdmin, userControllers.usersStatistics);

export default router;

