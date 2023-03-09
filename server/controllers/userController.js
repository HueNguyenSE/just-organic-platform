import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// auth user & get token
// route: POST /api/users/login
// Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error ('Invalid email or password');
	}
});

// Register user
// @route POST /api/register

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, phoneNumber, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error ('Email already exists');
	}

	const user = await User.create({ name, email, phoneNumber, password });

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phoneNumber: user.phoneNumber,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error ('Invalid user data')
	}
});

// GET user profile
// @route /api/users/profile
// @access protected
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phoneNumber: user.phoneNumber,
			isAdmin: user.isAdmin,
		})
	} else {
		res.status(404);
		throw new Error ('User not found')
	}
});

export { authUser, getUserProfile, registerUser };
