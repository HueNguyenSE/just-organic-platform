import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router(); //Express Router middleware
import Product from '../models/productModel.js';

// Home page route
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

// Product page route
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		product
			? res.json(product)
			: res.status(404).json({ message: 'Product not found' });

		res.json(product);
	})
);

export default router;
