import './card.css';

const Card = ({ id, name, image, category, description, price, stock, onAddToCart }) => {
	return (
		<div
			key={id}
			className="card"
		>
			<img
				className="cardImage"
				src={image}
				alt={name}
			/>
			<div className="cardContent">
				<h3 className="cardName">{name}</h3>
				<p className="cardCategory">{category}</p>
				<p className="cardDescription">{description}</p>
				<p className="cardPrice">${price}</p>
				<p className="cardStock">Stock: {stock}</p>
			</div>
			<div className="cardActions">
				<button
					onClick={() => onAddToCart(id)}
					className="cardButton"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default Card;
