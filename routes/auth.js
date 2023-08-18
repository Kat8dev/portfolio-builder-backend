import express from 'express';
import authControllers from '../controllers/authControllers.js';

const router = express.Router();

router.route('/auth/signup').post(authControllers.signup);

router.route('/auth/signin').post(authControllers.signin);

export default router;
