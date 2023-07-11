import React from 'react';
import './item.css';

const Item = ({ itemTitle, itemPrice, itemStock }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<h4 className='card-title'>{itemTitle}</h4>
				<h6 className='card-subtitle mb-2 text-muted'>Precio: ${itemPrice}</h6>
				<p className='card-text'>Stock disponible: {itemStock}</p>
				<a href='#' className='card-link'>
					Agregar al carrito
				</a>
				<a href='#' className='card-link'>
					Ver detalle
				</a>
			</div>
		</div>
	);
};

export default Item;
