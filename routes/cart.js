import { Router } from 'express';
import verification from '../helper/verifyToken.js';
import cartControllers from '../controllers/cartControllers.js';

const router = Router();

router
  .route('/cart')
  .post(verification.verifyToken, cartControllers.createCart);

router
  .route('/cart/:id')
  .put(verification.verifyTokenAndAuthorization, cartControllers.updateCart);

router
  .route('/order/:id')
  .delete(verification.verifyTokenAndAuthorization, cartControllers.deleteCart);

router
  .route('/cart/:userId')
  .get(verification.verifyTokenAndAuthorization, cartControllers.getUserCart);

router
  .route('/order')
  .get(verification.verifyTokenAndAdmin, cartControllers.getAll);

export default router;
