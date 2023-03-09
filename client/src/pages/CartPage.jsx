import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { List } from '@chakra-ui/react';

const CartPage = (props) => {
	let { id } = useParams();
	let location = useLocation();
	let navigate = useNavigate();

	const productId = id;

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	const removeFromCartHandler = (id) => {
		console.log(`Removing ${id} from cart`);
        dispatch(removeFromCart(id));
	};

    const checkoutHandler = () => {
        console.log(`Checkout`)
        let path = 'login?redirect=shipping'
        navigate(path)
    };

	return (
		<Row>
			<Col md={8}>
				<h1>Your Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message>
						Your cart is empty <Link to='/'>Continue Shopping</Link>
					</Message>
				) : (
					<ListGroup variant='flush'>
						{cartItems.map((item) => (
							<ListGroup.Item key={item.product}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={2}>
										<Link to={`/products/${item.product}`}>{item.name}</Link>
									</Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
									<Col md={2}>
										<Form.Control
											type='number'
											step='1'
											max={item.countInStock}
											style={{
												paddingRight: '0.1rem',
												paddingLeft: '0.5rem',
											}}
											onChange={(e) =>
												dispatch(
													addToCart(item.product, Number(e.target.value))
												)
											}
											value={item.qty}
										></Form.Control>
									</Col>
									<Col md={2}>
										<Button
											type='button'
											variant='light'
											onClick={() => removeFromCartHandler(item.product)}
										>
											<i className='fas fa-trash'></i>
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disable={cartItems.length === 0} onClick={checkoutHandler}></Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
		</Row>
	);
};

export default CartPage;
