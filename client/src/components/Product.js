import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Rating from './Rating';

function Product({ product }) {
	// duplicated code with Product Page -> TO BE REFACTORED
	const priceRanges = new Map(product.priceRanges);

	let minPrice = Infinity;
	let minQty = Infinity;

	priceRanges.forEach((price, qty) => {
		if (parseFloat(price) < minPrice) {
			minPrice = price;
		}
		if (parseFloat(qty) < minQty) {
			minQty = qty;
		}
	});

	return (
		<div>
			<Card className='my-3 p-3 rounded'>
				<Link to={`/product/${product._id}`}>
					<Card.Img src={product.images[0]} variant='top' />
				</Link>

				<Card.Body>
					<Link to={`/product/${product._id}`}>
						<Card.Title as='div'>
							<strong className='text-capitalize'>{product.name}</strong>
						</Card.Title>
					</Link>
					<Card.Text as='div'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
							color='green'
						/>
					</Card.Text>
					<Card.Text as='div'>
						<div className='my-3'>Shipping Area: {product.shippingArea}</div>
					</Card.Text>
					<Card.Text as='div'>
						<div className='my-3'>
							<span>From</span>
							<span><strong>${minPrice}</strong></span>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
