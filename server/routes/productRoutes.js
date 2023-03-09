import express from 'express';
const router = express.Router(); //Express Router middleware
import { getProducts, getProductById } from '../controllers/productController.js';

// Home page route
router.route('/').get(getProducts)

// Product page route
router.route('/:id').get(getProductById)

export default router;
