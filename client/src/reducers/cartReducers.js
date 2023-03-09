import {
	CART_ADD_ITEM,
	CART_ADD_SHIPPING_ADDRESS,
	CART_REMOVE_ITEM,
	CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;

			// find the existing item.
			// product is the id
			const existItem = state.cartItems.find((i) => i.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((i) =>
						i.product === existItem.product ? item : i
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((i) => i.product !== action.payload),
			};
		case CART_ADD_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};

		default:
			return state;
	}
};
