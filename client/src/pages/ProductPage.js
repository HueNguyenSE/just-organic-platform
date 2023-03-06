import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Rating from '../components/Rating';
import products from '../products';

function ProductPage(props) {
	let { id } = useParams();

	const product = products.find((product) => product._id === id);

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
    } );




    const images = product.images.map((image, index) => (
            <div key={index}>
                <img src={image} alt={product.name} />
            </div>
        ))

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
            <Row>
                <Col md={6}>
                    <Carousel thumbWidth={100} >
                        {images}
                    </Carousel>
                </Col>

                <Col md={3}>
                    <ListGroup  variant='flush'>
                        <ListGroup.Item >
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Price from: ${minPrice} per {product.uom}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Min qty. per order: {minQty} {product.uom}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Shipping area: {product.shippingArea}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Origin: {product.origin}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Description: {product.description}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Provider: {product.seller}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price from:
                                    </Col>
                                    <Col>
                                        <strong>${minPrice}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                               <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

            </Row>
		</>
	);
}

export default ProductPage;
