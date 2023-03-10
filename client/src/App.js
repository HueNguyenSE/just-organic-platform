import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Routes>
						<Route path='/' element={<HomePage />} exact />
						<Route path='/products/:id' element={<ProductPage />} />
						<Route path='/cart/:id?' element={<CartPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/shipping' element={<ShippingPage />} />
						<Route path='/payment' element={<PaymentPage />} />
						<Route path='/placeorder' element={<PlaceOrderPage />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
