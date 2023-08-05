import './EmptyCart.css';
import emptyCartLogo from '../../assets/empty-cart-logo.svg';

function EmptyCart() {
	return (
		<div className='emptyCartContainer'>
			<img src={emptyCartLogo} className='emptyCartLogo' />
			<h2 className='emptyCartTitle'>Tu carrito está vacío!!</h2>
		</div>
	);
}

export default EmptyCart;
