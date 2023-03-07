import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

function Product({ product }) {
	const startPrice = product.priceRanges.reduce(
		(startPrice, range) =>
			startPrice < range.unitPrice ? startPrice : range.unitPrice,
		Infinity
	);

	return (
		<div>
			<Card className='my-3 p-3 rounded'>
				<Link to={`/products/${product._id}`}>
					<Card.Img src={product.images[0].url} variant='top' />
				</Link>

				<Card.Body>
					<Link to={`/products/${product._id}`}>
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
							<span>
								<strong>${startPrice}</strong>
							</span>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
