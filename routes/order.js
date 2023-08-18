import { Router } from 'express';
import verification from '../helper/verifyToken.js';
import orderControllers from '../controllers/orderControllers.js';

const router = Router();

router
  .route('/order')
  .post(verification.verifyToken, orderControllers.createOrder);

router
  .route('/order/:id')
  .put(verification.verifyTokenAndAdmin, orderControllers.updateOrder);

router
  .route('/order/:id')
  .delete(verification.verifyTokenAndAdmin, orderControllers.deleteOrder);

router
  .route('/order/:userId')
  .get(
    verification.verifyTokenAndAuthorization,
    orderControllers.getUsersOrders
  );

router
  .route('/order')
  .get(verification.verifyTokenAndAdmin, orderControllers.getAll);

router
  .route('/order/income')
  .get(verification.verifyTokenAndAdmin, orderControllers.monthlyIncome);

export default router;
