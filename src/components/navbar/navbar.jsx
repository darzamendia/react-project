import React from 'react';
import './navbar.css';
import CartWidget from './cartwidget';

const NavBar = () => {
	return (
		<>
			<input type='checkbox' className='side-menu' id='side-menu' />
			<label className='hamburger' htmlFor='side-menu'>
				<span className='hamburger-item'></span>
			</label>
			<nav className='navbar'>
				<ul className='menu'>
					<li>
						<a href='/react-project/'>Productos</a>
					</li>
					<li>
						<a href='#'>Contactos</a>
					</li>
					<li>
						<a href='#'>Sobre nosotros</a>
					</li>
					<li>
						<CartWidget />
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
