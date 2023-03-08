import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Button, Form } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

import Rating from '../components/Rating';

function ProductPage() {
	const [ qty, setQty ] = useState(null);

	let { id } = useParams();
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);

	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(id));
	}, [dispatch, id]);

	const images = product.images?.map((image, index) => (
		<div key={index}>
			<img
				src={image.url}
				alt={product.name}
				style={{ aspectRatio: '1/1', objectFit: 'cover' }}
			></img>
		</div>
	));

	// duplicate code here. TODO: refactor
	const startPrice = product.priceRanges?.reduce(
		(startPrice, range) =>
			startPrice < range.unitPrice ? startPrice : range.unitPrice,
		Infinity
	);

	const minQty = product.priceRanges?.reduce(
		(minQty, range) => (minQty < range.minQty ? minQty : range.minQty),
		Infinity
	);

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Carousel thumbWidth={100}>{images}</Carousel>
					</Col>

					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								Price from: ${startPrice} per {product.uom}
							</ListGroup.Item>
							<ListGroup.Item>
								Min qty. per order: {minQty} {product.uom}
							</ListGroup.Item>
							<ListGroup.Item>
								Shipping area: {product.shippingArea}
							</ListGroup.Item>
							<ListGroup.Item>Origin: {product.origin}</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
							<ListGroup.Item>Provider: {product.seller}</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col md={3}>
						<Card>

							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>

								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty<br/>(Min {minQty}):</Col>
											<Col>
												<Form.Control
													type='number'
													step='1'
													min={minQty}
													max={product.countInStock}
													style={{paddingRight: '0.1rem', paddingLeft: '0.5rem'}}
													onChange={(e) => setQty(e.target.value)}></Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										className='btn-block'
										type='button'
										disabled={product.countInStock === 0}
									>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
}

export default ProductPage;
