import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc Create a new order
// route POST /api/orders
// access: private
export const addOrderItems = asyncHandler(async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		tax,
		shippingPrice,
		totalPrice,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error('No order items');
	} else {
		const order = new Order({
			user: request.user._id,
			orderItems,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			tax,
			shippingPrice,
			totalPrice,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}

	res.json(products);
});
