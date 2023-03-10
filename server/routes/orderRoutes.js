import express from 'express';
import { get } from 'mongoose';
const router = express.Router();
import { addOrderItems } from '../controllers/orderController.js';

import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);

export default router;
