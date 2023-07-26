import './cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';

function Cart() {
	const navigate = useNavigate();
	const onBtnCheckout = () => {
		navigate('/react-project/checkout');
	};

	const { cart, onAddQuantity, onReduceQuantity, onRemoveItem, subtotalCart, getTotalItemQuantity } =
		useContext(CartContext);
	return (
		<div className='cartContainer'>
			<div>
				<h2>Carrito</h2>
				{cart.length === 0 ? <h3>Empty</h3> : null}
				{cart?.length > 0
					? cart.map((cartItem) => (
							<div key={cartItem.name}>
								<div className='itemCartCard'>
									<img className='itemCartCardImage' src={cartItem.image} alt={cartItem.name} />
									<div className='itemCartCardContent'>
										<h3 className='itemCartCardName'>{cartItem.name}</h3>
										<p className='itemCartCardPrice'>${cartItem.price}</p>
									</div>
									<div className='itemCartCardActions'>
										<button onClick={() => onReduceQuantity(cartItem.id)} className='itemCartCardButton'>
											-
										</button>
										<p className='itemCartCardStock'>{cartItem.quantity}</p>
										<button onClick={() => onAddQuantity(cartItem.id)} className='CartBtnDecrease'>
											+
										</button>
										<button onClick={() => onRemoveItem(cartItem.id)} className='CartBtnRemove'>
											X
										</button>
									</div>
								</div>
							</div>
					  ))
					: null}
				{cart?.length > 0 ? (
					<div className='cartActions'>
						<p className='subtotalCartPrice'>Total: ${subtotalCart}</p>
						<p className='totalItemQuantity'>Quantity: {getTotalItemQuantity}</p>
						<button onClick={onBtnCheckout} className='checkoutBtn'>
							Checkout
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default Cart;
