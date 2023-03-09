import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Container, Col } from 'react-bootstrap';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

function PaymentPage() {
	// Get cart info from local storage
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { shippingAddress } = cart;

	// If no shipping address, navigate to the ShippingPage
	if (!shippingAddress) {
		navigate('/shipping');
	}

	const [paymentMethod, setPaymentMethod] = useState('Stripe');

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(savePaymentMethod({ paymentMethod }));
		navigate('/placeorder');
	}

	return (
		<Container>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>
					<Col>
						<Form.Check
							type='radio'
							label='Stripe'
							id='Stripe'
							name='paymentMethod'
							checked
							value='Stripe'
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
					</Col>
					<Col>
						<Form.Check
							type='radio'
							label='PayPal'
							id='PayPal'
							name='paymentMethod'
							value='PayPal'
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
					</Col>
					<Button type='submit' variant='primary'>
						Continue
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default PaymentPage;
