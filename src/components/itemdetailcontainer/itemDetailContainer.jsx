import './itemDetailContainer.css';

const ItemDetailCard = ({ id, name, image, category, description, price, stock, onAddToCart }) => {
	return (
		<div className='itemDetailCard'>
			<img className='itemDetailCardImage' src={image} alt={name} />
			<div className='itemDetailCardContent'>
				<h3 className='itemDetailCardName'>{name}</h3>
				<p className='itemDetailCardCategory'>{category}</p>
				<p className='itemDetailCardDescription'>{description}</p>
				<p className='itemDetailCardPrice'>${price}</p>
				<p className='itemDetailCardStock'>Stock: {stock}</p>
			</div>
			<div className='itemDetailCardActions'>
				<button onClick={() => onAddToCart(id)} className='itemDetailCardButton'>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ItemDetailCard;
