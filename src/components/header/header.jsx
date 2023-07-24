/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './header.css';
import NavBar from '../navbar/navbar.jsx';
import { Link } from "react-router-dom";

const Header = ({ logo }) => {
	return (
		<>
			<header className='header container-fluid'>
				<Link to='/react-project/' className='logo'>
					{logo}	
				</Link>
				<NavBar />
			</header>
		</>
	);
};

export default Header;
