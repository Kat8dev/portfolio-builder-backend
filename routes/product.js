import { Router } from 'express';
import verification from '../helper/verifyToken.js';
import productsControllers from '../controllers/productControllers.js';

const router = Router();

router
  .route('/products')
  .post(verification.verifyTokenAndAdmin, productsControllers.createProduct);

router
  .route('/products/:id')
  .put(verification.verifyTokenAndAdmin, productsControllers.updateProduct);

router
  .route('/products/:id')
  .delete(verification.verifyTokenAndAdmin, productsControllers.deleteProduct);

router.route('/products/:id').get(productsControllers.getProduct);

router.route('/products').get(productsControllers.getAllProducts);

export default router;
