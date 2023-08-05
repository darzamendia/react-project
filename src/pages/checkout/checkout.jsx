import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useQuery } from '../../hooks/useQuery';
import { CartContext } from '../../context/cart-context';
import { firebaseServices } from '../../services/firebase/firebase';
import Input from '../../components/input/input';
import './checkout.css';
import EmptyCart from '../../components/emptyCart/emptyCart';

const initialState = {
	name: { value: '', error: '', hasError: true, active: false, name: 'name' },
	surname: { value: '', error: '', hasError: true, active: false, name: 'surname' },
	document: { value: '', error: '', hasError: true, active: false, name: 'document' },
	email: { value: '', error: '', hasError: true, active: false, name: 'email' },
	email02: { value: '', error: '', hasError: true, active: false, name: 'email02' },
	phone: { value: '', error: '', hasError: true, active: false, name: 'phone' },
	address: { value: '', error: '', hasError: true, active: false, name: 'address' },
	postalCode: { value: '', error: '', hasError: true, active: false, name: 'postalCode' },
	isFormValid: false,
};

function Checkout() {
	const { cart, subtotalCart, setCart, getTotalItemQuantity } = useContext(CartContext);
	const [formState, inputHandler, inputFocus, inputBlur, clearInputs] = useForm(initialState);
	const [orderCreated, setOrderCreated] = useState(null);
	const { state } = useLocation();
	const navigate = useNavigate();
	let query = useQuery();

	useEffect(() => {
		const cartId = query.get('cartId');
		if (query.get('cartId')) {
			const getCart = async () => {
				const cart = await firebaseServices.getCartById(cartId);
				return cart;
			};
			getCart()
				.then((cart) => {
					setCart(cart.items);
				})
				.catch((error) => {
					console.log({ error });
				});
		}
	}, [query]);

	const onChange = (event) => {
		const { name, value } = event.target;
		inputHandler({ name, value });
	};

	const onFocus = ({ name }) => {
		inputFocus({ name });
	};

	const onBlur = ({ name }) => {
		inputBlur({ name });
	};

	const onHandlerOrder = async () => {
		const newOrder = {
			buyer: {
				name: formState.name.value,
				surname: formState.surname.value,
				document: formState.document.value,
				email: formState.email.value,
				email02: formState.email02.value,
				phone: formState.phone.value,
				address: formState.address.value,
				postalCode: formState.postalCode.value,
			},
			createdAt: new Date(),
			items: cart,
			payment: {
				currency: 'ARS',
				method: 'CASH',
				type: 'CASH',
			},
			seller: {
				id: 1,
				name: 'Dandan',
				phone: '123456789',
				email: 'Dandan@react-project.com',
			},
			shipping: {
				deliverDate: new Date() + 7,
				trackingNumber: '123456ff227aa89',
				type: 'DELIVERY',
			},
			total: subtotalCart,
		};

		const orderId = await firebaseServices.createOrder(newOrder);
		await firebaseServices.updateCart(state?.cartId);

		return {
			orderId,
		};
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const { orderId } = await onHandlerOrder();
		clearInputs({ formState });
		setCart([]);
		navigate('/react-project/successOrder', { state: { orderId: orderId.id } });
	};

	return (
		<div className='checkoutMainCnt'>
			<h1 className='checkoutTitle'>Checkout</h1>
			{cart?.length > 0 ? (
				<div className='checkoutContent'>
					<div className='checkoutContentUp'>
						<div className='checkoutContainer'>
							<form onSubmit={onSubmit} className='checkoutForm'>
								<div className='checkoutFormContainer'>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='Nombre'
											id='name'
											name='name'
											required={true}
											label='Name'
											onChange={onChange}
											onFocus={(e) => onFocus({ e, name: 'name' })}
											onBlur={(e) => onBlur({ e, name: 'name' })}
											active={formState.name.active}
											error={formState.name.error}
											hasError={formState.name.hasError}
											maxLength={40}
										/>
									</div>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='Apellido'
											id='surname'
											name='surname'
											required={true}
											label='Apellido'
											onChange={onChange}
											onFocus={() => onFocus({ name: 'surname' })}
											onBlur={() => onBlur({ name: 'surname' })}
											active={formState.surname.active}
											error={formState.surname.error}
											hasError={formState.surname.hasError}
											maxLength={40}
										/>
									</div>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='DNI'
											id='document'
											name='document'
											required={true}
											label='Documento de identidad'
											onChange={onChange}
											onFocus={() => onFocus({ name: 'document' })}
											onBlur={() => onBlur({ name: 'document' })}
											active={formState.document.active}
											error={formState.document.error}
											hasError={formState.document.hasError}
											maxLength={15}
										/>
									</div>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='Correo electrónico'
											id='email'
											name='email'
											required={true}
											label='Email'
											onChange={onChange}
											onFocus={() => onFocus({ name: 'email' })}
											onBlur={() => onBlur({ name: 'email' })}
											active={formState.email.active}
											error={formState.email.error}
											hasError={formState.email.hasError}
											maxLength={40}
										/>
									</div>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='Re-ingresar correo electrónico'
											id='email02'
											name='email02'
											required={true}
											label='Correo electrónico'
											onChange={onChange}
											onFocus={() => onFocus({ name: 'email02' })}
											onBlur={() => onBlur({ name: 'email02' })}
											active={formState.email02.active}
											error={formState.email02.error}
											hasError={formState.email02.hasError}
											maxLength={40}
										/>
									</div>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='Teléfono'
											id='phone'
											name='phone'
											required={true}
											label='Telefono'
											onChange={onChange}
											onFocus={() => onFocus({ name: 'phone' })}
											onBlur={() => onBlur({ name: 'phone' })}
											active={formState.phone.active}
											error={formState.phone.error}
											hasError={formState.phone.hasError}
											maxLength={15}
										/>
									</div>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='Dirección'
											id='address'
											name='address'
											required={true}
											label='Direccion'
											onChange={onChange}
											onFocus={() => onFocus({ name: 'address' })}
											onBlur={() => onBlur({ name: 'address' })}
											active={formState.address.active}
											error={formState.address.error}
											hasError={formState.address.hasError}
											maxLength={80}
										/>
									</div>
									<div className='checkoutFormInputGroup'>
										<Input
											placeholder='Código postal'
											id='postalCode'
											name='postalCode'
											required={true}
											label='Codigo postal'
											onChange={onChange}
											onFocus={() => onFocus({ name: 'postalCode' })}
											onBlur={() => onBlur({ name: 'postalCode' })}
											active={formState.postalCode.active}
											error={formState.postalCode.error}
											hasError={formState.postalCode.hasError}
											maxLength={10}
										/>
									</div>
								</div>
							</form>
						</div>
						<div className='checkoutCartContainer'>
							<h2 className='checkoutDetailTitle'>Detalle de compra</h2>
							{cart.length === 0 ? <h3>Empty</h3> : null}
							{cart?.length > 0
								? cart.map((cartItem) => (
										<div key={cartItem.name}>
											<div className='checkoutCartCard'>
												<img className='checkoutCartCardImage' src={cartItem.image} alt={cartItem.name} />
												<div className='checkoutCartCardContent'>
													<div className='checkoutCartCardDetail'>
														<h3 className='checkoutCartCardName'>{cartItem.name}</h3>
														<p className='checkoutCartCardPrice'>
															${cartItem.price} x {cartItem.quantity} unidades
														</p>
													</div>
													<div className='checkoutCartCardTotal'>
														<p>Total ${cartItem.price * cartItem.quantity}</p>
													</div>
												</div>
											</div>
										</div>
								  ))
								: null}
							{cart?.length > 0 ? (
								<div className='checkoutCartTotalCnt'>
									<p className='checkoutTotalItems'>Cantidad de items: {getTotalItemQuantity}</p>
									<p className='checkoutCartTotal'>Precio final: ${subtotalCart}</p>
								</div>
							) : null}
						</div>
					</div>
					<div className='checkoutContentDown'>
						<button onClick={onSubmit} disabled={!formState.isFormValid} type='submit' className='butttonCheckout'>
							Finalizar compra
						</button>
					</div>
				</div>
			) : (
				<EmptyCart />
			)}
		</div>
	);
}

export default Checkout;
