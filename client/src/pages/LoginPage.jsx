import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch= useDispatch();

    const userLogin = useSelector(state => state.userInfo)
    const { loading, error, userInfo } = userLogin;

    // let location = useLocation();
    const home = '/'

    let navigate = useNavigate();
    useEffect(() => {
        if (userInfo) {
            navigate(home);
        }
    })

    function submitHandler (e) {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign In</Button>
            </Form>

            <Row>
                <Col>
                    Don't have account yet? <Link to={'/register'}>Sign Up</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage;
