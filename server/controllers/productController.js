import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// fetch all products
// route GET /api/products
// access: all
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});

	res.json(products);
});

// fetch a single product
// route: GET /api/products/:id
// access: all
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	product
		? res.json(product)
		: res.status(404).json({ message: 'Product not found' });

	res.json(product);
});

export { getProducts, getProductById };
