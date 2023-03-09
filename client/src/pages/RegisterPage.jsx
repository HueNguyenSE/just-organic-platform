import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions'

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userInfo)
    const { loading, error, userInfo } = userRegister;

    // let location = useLocation();
    const home = '/'

    let navigate = useNavigate();
    useEffect(() => {
        if (userInfo) {
            navigate(home);
        }
    })

    function submitHandler(e) {
        e.preventDefault();
        // DISPATCH REGISTER
        if (password !== confirmPassword) {
            setMessage("Passwords do not match")
        } else {
            dispatch(register(name, email, phoneNumber, password))
        }
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='name' placeholder='Full name' value={name} onChange={e => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='tel'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='tel' placeholder='Phone Number' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirm-password'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Text>By clicking Sign Up, you agree to our <Link to='#' target={'_blank'}>Terms, Privacy Policy</Link> and <Link to="#" target={'_blank'}>Cookies Policy</Link>.</Form.Text>
                <Button type='submit' variant='primary'>Sign Up</Button>
            </Form>

            <Row>
                <Col>
                    <Link to={'/login'}>Already have an account?</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterPage;
