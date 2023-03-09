import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderPage() {
	// Get cart info from local storage
	const cart = useSelector(state => state.cart);
	const { paymentMethod } = cart;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addShippingAddress({ address, city, postalCode, country }))
		navigate('/payment');
	}

	return (
		<Container>
			<CheckoutSteps step1 step2 step3 step4 />
				<h1>Place Order</h1>
				<Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Address:</strong>
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
		</Container>
	);
}

export default PlaceOrderPage;

