import { memo } from 'react';
import './itemCard.css';

const ItemCard = memo(({ id, name, image, category, description, price, stock, onAddToCart, onShowItemDetail }) => {
	return (
		<div className='itemCard'>
			<div className='itemCardContent' onClick={() => onShowItemDetail(id)}>
				<img className='itemCardImage' src={image} alt={name} />
				<h3 className='itemCardName'>{name}</h3>
				<p className='itemCardCategory'>{category}</p>
				<p className='itemCardDescription'>{description}</p>
				<p className='itemCardPrice'>${price}</p>
				<p className='itemCardStock'>Stock: {stock}</p>
			</div>
			<div className='itemCardActions'>
				<button onClick={() => onAddToCart(id)} className='itemCardButton'>
					Add to cart
				</button>
			</div>
		</div>
	);
});

export default ItemCard;
