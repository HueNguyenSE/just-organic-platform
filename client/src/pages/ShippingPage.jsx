import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Container } from 'react-bootstrap';
import { addShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingPage() {
	// Get cart info from local storage
	const cart = useSelector(state => state.cart);
	const { shippingAddress } = cart;

	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addShippingAddress({ address, city, postalCode, country }))
		navigate('/payment');
	}

	return (
		<Container>
			<CheckoutSteps step1 step2 />
				<h1>Shipping</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='address'>
						<Form.Label>Address</Form.Label>
						<Form.Control
							type='text'
							required
							placeholder='Address'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='city'>
						<Form.Label>City</Form.Label>
						<Form.Control
							type='text'
							required
							placeholder='City'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='postal code'>
						<Form.Label>Postal Code</Form.Label>
						<Form.Control
							type='text'
							required
							placeholder='Postal Code'
							value={postalCode}
							onChange={(e) => setPostalCode(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='country'>
						<Form.Label>Country</Form.Label>
						<Form.Control
							type='text'
							required
							placeholder='Country'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Button type='submit' variant='primary'>
						Continue
					</Button>
				</Form>
		</Container>
	);
}

export default ShippingPage;
