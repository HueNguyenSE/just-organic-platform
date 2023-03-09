import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Container, Row, Col, ListGroup, ListGroupItem, Image, Card } from 'react-bootstrap';
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderPage() {
    // Get cart info from local storage
    const cart = useSelector(state => state.cart);
    console.log(cart.cartItems)

    // tax rate
    const taxRate = 0.1;

    // subtotal including tax
    cart.subTotal = cart.cartItems.reduce((acc, item) => {
        acc += item.price * item.qty
        return acc;
    }, 0)

    // tax
    cart.tax = (cart.subTotal * taxRate).toFixed(2)

    // items price excluding tax
    cart.itemsPrice = (cart.subTotal - cart.tax).toFixed(2);

    // Caculate shipping
    cart.shippingPrice = 0;

    // total
    cart.total = (cart.subTotal + cart.shippingPrice).toFixed(2);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function placeOrderHandler(e) {
        console.log('orderHandler');
    }

    return (
        <Container>
            <CheckoutSteps step1 step2 step3 step4 />
            <h1>Place Order</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>Shipping</h3>
                            <p>
                                <strong>Address:</strong>
                                {cart.shippingAddress.address},{' '}{cart.shippingAddress.city}, {' '}{cart.shippingAddress.postalCode},{' '}{cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Payment Method</h3>
                            <p>
                                <strong>Method:</strong>
                                {cart.paymentMethod.paymentMethod}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Order Items</h3>
                            {cart.cartItems.length === 0 ? <Message>Your card is empty</Message> : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>
                                                <Col>
                                                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Order Summary</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${cart.tax}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${cart.total}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                               <Button type='button' className='btn-block' disabled={cart.cartItems.length === 0} onClick={placeOrderHandler}>Place Order</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PlaceOrderPage;

