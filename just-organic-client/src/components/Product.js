import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

function Product({ product }) {
	return (
		<div>
			<Card className='my-3 p-3 rounded'>
				<Link to={`/product/${product._id}`}>
					<Card.Img src={product.images[0]} variant='top' />
				</Link>

				<Card.Body>
					<Link to={`/product/${product._id}`}>
						<Card.Title as='div'>
							<b>{product.name}</b>
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
						<div className='my-3'>Shipping: {product.shippingArea}</div>
					</Card.Text>
					<Card.Text as='h3'>
						<div className='my-3'>${product.unitPrice}</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
