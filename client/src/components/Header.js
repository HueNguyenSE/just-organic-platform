import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const { userInfo } = useSelector((state) => state.userInfo);

	function logoutHandler(e) {
		dispatch(logout());
		navigate('/');
	}

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand as={Link} to='/'>
						Just Organic
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link as={Link} to='/cart'>
								<i className='fas fa-shopping-cart'></i> YOUR CART
							</Nav.Link>
							{userInfo ? (
								<NavDropdown title={userInfo.name}>
									<NavDropdown.Item as={Link} to='/profile'>
										Profile
									</NavDropdown.Item>

									<NavDropdown.Item onClick={logoutHandler}>
										Log Out
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Nav.Link as={Link} to='/login'>
									<i className='fas fa-user'></i> LOG IN
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
