import { useContext } from 'react';
import React from 'react';
import './navbar.css';
// import CartWidget from './cartwidget';
import { CartContext } from '../../context/cart-context'
import cartImage from '../../assets/cart-logo.svg'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const NavBar = () => {
	const {cart} = useContext(CartContext);
	const navigate = useNavigate();
	const goToCart = () => {
		navigate('/react-project/cart');
	}

	return (
		<>
			<input type='checkbox' className='side-menu' id='side-menu' />
			<label className='hamburger' htmlFor='side-menu'>
				<span className='hamburger-item'></span>
			</label>
			<nav className='navbar'>
				<ul className='menu'>
					<li>
						<Link to='/react-project/'>Productos</Link>
					</li>
					<li>
						<a href='#'>Contactos</a>
					</li>
					<li>
						<a href='#'>Sobre nosotros</a>
					</li>
					<li onClick={goToCart}>
						<div className="menu-cart-container">
							<img src={cartImage} className="nav-cart-image" />
							<span className="nav-cart-count">{cart.length}</span>
						</div>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
