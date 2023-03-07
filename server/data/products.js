const products = [
	{
		_id: '1',
		name: 'Organic Avocado',
		images: [
			'/images/avocados/1.jpg',
			'/images/avocados/2.jpg',
			'/images/avocados/3.jpg',
		],
		origin: 'Lam Dong',
		description:
			'Grown in Love Valley, Lam Dong, Vietnam, our avocado is beloved for its mild taste and rich texture. We carefully pick, package and deliver to your kitchen.',
		seller: 'Love Valley Farm',
		category: 'Fruit',
		priceRanges: [
			{
				minQty: 5,
				unitPrice: 5.69,
			},
			{
				minQty: 20,
				unitPrice: 5.35,
			},
			{
				minQty: 50,
				unitPrice: 4.9,
			},
		],
		uom: 'kg',
		countInStock: 0,
		rating: 4.2,
		numReviews: 50,
		shippingArea: 'Nationwide',
	},
	{
		_id: '2',
		name: 'Global Gap Custard Apple',
		images: ['/images/custard-apples/1.jpg', '/images/custard-apples/2.jpg'],
		origin: 'Tay Ninh',
		description:
			'Our famous custard apples are grown in the area of Ba Den Hill  ',
		seller: 'Sun Farm',
		category: 'Fruit',
		priceRanges: [
			{
				minQty: 5,
				unitPrice: 4.59,
			},
			{
				minQty: 20,
				unitPrice: 5.35,
			},
			{
				minQty: 50,
				unitPrice: 4.9,
			},
		],
		uom: 'kg',
		countInStock: 500,
		rating: 4.5,
		numReviews: 20,
		shippingArea: 'Nationwide',
	},
	{
		_id: '3',
		name: 'Global Gap Custard Apple',
		images: [
			'/images/mangos/1.jpg',
			'/images/mangos/2.jpg',
			'/images/mangos/3.jpg',
			'/images/mangos/4.jpg',
		],
		origin: 'Tien Giang',
		description:
			'Each mano weighs around 1kg. Our manges feature refreshing and sweet taste and pleasant aroma. Our farm is certified with Global Gap standards.',
		seller: 'River Farm',
		category: 'Fruit',
		priceRanges: [
			{
				minQty: 5,
				unitPrice: 4.59,
			},
			{
				minQty: 20,
				unitPrice: 5.35,
			},
			{
				minQty: 50,
				unitPrice: 4.9,
			},
		],
		uom: 'kg',
		countInStock: 300,
		rating: 3.8,
		numReviews: 25,
		shippingArea: 'Nationwide',
	},
	{
		_id: '4',
		name: 'Green Orange',
		images: [
			'/images/oranges/1.jpg',
			'/images/oranges/2.jpg',
			'/images/oranges/3.jpg',
			'/images/oranges/4.jpg',
		],
		origin: 'Cu Chi, Ho Chi Minh City',
		description:
			'We plant happy oranges and carefully pick and deliver to your home. Our green oranges are perfect for juice and smoothies.',
		seller: 'Happy Farmers',
		category: 'Fruit',
		priceRanges: [
			{
				minQty: 5,
				unitPrice: 4.59,
			},
			{
				minQty: 20,
				unitPrice: 5.35,
			},
			{
				minQty: 50,
				unitPrice: 4.9,
			},
		],
		uom: 'kg',
		countInStock: 600,
		rating: 3.5,
		numReviews: 28,
		shippingArea: 'Ho Chi Minh city',
	},
	{
		_id: '5',
		name: 'VietGap Red Seed Water Melon',
		images: ['/images/watermelons/1.jpg', '/images/watermelons/2.jpg'],
		origin: 'Tien Giang',
		description:
			'Our sweet yet mild red water melons are perfect for summer parties, picnics. We only pick the best ones and carefully pack.',
		seller: 'River Farm',
		category: 'Fruit',
		priceRanges: [
			{
				minQty: 5,
				unitPrice: 4.59,
			},
			{
				minQty: 20,
				unitPrice: 5.35,
			},
			{
				minQty: 50,
				unitPrice: 4.9,
			},
		],
		uom: 'kg',
		countInStock: 600,
		rating: 4.5,
		numReviews: 23,
		shippingArea: 'Ho Chi Minh city',
	},
];

export default products;
