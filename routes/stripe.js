import { Router } from "express";
import payment from "../controllers/stripeController.js";

const router = Router();

router.route("/checkout/payment").post(payment.payment);

export default router;