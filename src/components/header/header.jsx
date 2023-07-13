/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './header.css';
import NavBar from '../navbar/navbar.jsx';

const Header = ({ logo }) => {
	return (
		<>
			<header className='header container-fluid'>
				<a href='/' className='logo'>
					{logo}
				</a>
				<NavBar />
			</header>
		</>
	);
};

export default Header;
