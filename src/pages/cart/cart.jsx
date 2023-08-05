import './cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';
import { firebaseServices } from '../../services/firebase/firebase';
import EmptyCart from '../../components/emptyCart/emptyCart';
function Cart() {
	const navigate = useNavigate();
	const { cart, onAddQuantity, onReduceQuantity, onRemoveItem, subtotalCart, getTotalItemQuantity } =
		useContext(CartContext);

	const onHandlerCreateCart = async () => {
		const newCart = {
			buyer: {
				id: 1,
			},
			items: cart,
			createdAt: new Date(),
			total: subtotalCart,
			status: 'pending',
		};

		const cartId = await firebaseServices.createCart(newCart);
		return cartId;
	};

	const onBtnCheckout = async () => {
		const cartId = await onHandlerCreateCart();
		navigate('/react-project/checkout', { state: { cartId: cartId.id } });
	};

	return (
		<div className='cartContainer'>
			<div>
				<h2>Carrito</h2>
				{cart.length === 0 ? <EmptyCart /> : null}
				{cart?.length > 0
					? cart.map((cartItem) => (
							<div key={cartItem.name}>
								<div className='itemCartCard'>
									<img className='itemCartCardImage' src={cartItem.image} alt={cartItem.name} />
									<div className='itemCartCardContent'>
										<h3 className='itemCartCardName'>{cartItem.name}</h3>
										<p className='itemCartCardPrice'>Stock disponible: {cartItem.quantity}</p>
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
						<p className='totalItemQuantity'>Cantidad de items: {getTotalItemQuantity}</p>
						<p className='subtotalCartPrice'>Total: ${subtotalCart}</p>
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
