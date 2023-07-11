import React from 'react';
const CartWidget = () => {
	return (
		<a className='nav-link py-3' href='#'>
			<button type='button' className='btn btn-warning'>
				Carrito
				<i className='bi-cart4'></i>
				<span className='badge bg-dark rounded-pill'>2</span>
			</button>
		</a>
	);
};

export default CartWidget;
