import { createContext, useState } from 'react';

const initialState = {
	cart: [],
	setCart: () => {},
	market: [],
	setMarket: () => {},
	categories: [],
	setCategories: () => {},
	getItemQuantity: () => {},
	onAddToCart: () => {},
	onAddQuantity: () => {},
	onReduceQuantity: () => {},
	onRemoveItem: () => {},
	subtotalCart: 0,
	// total,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [categories, setCategories] = useState([]);
	const [market, setMarket] = useState([]);

	const onAddToCart = (id) => {
		const item = market.find((item) => item.id === id);
		if (cart?.find((item) => item.id === id)?.quantity === Number(item.stock)) return;
		if (cart?.length === 0) {
			setCart([{ ...item, quantity: 1 }]);
		}
		if (cart?.length > 0 && !cart?.find((item) => item.id === id)) {
			setCart([...cart, { ...item, quantity: 1 }]);
		}
		if (cart?.length > 0 && cart?.find((item) => item.id === id)) {
			setCart((currentCart) => {
				return currentCart.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			});
		}
	};

	const onAddQuantity = (id) => {
		const item = items.find((item) => item.id === id);
		if (cart?.find((item) => item.id === id)?.quantity === Number(item.stock)) return;
		if (cart?.length === 0) {
			setCart([{ ...item, quantity: 1 }]);
		}
		if (cart?.length > 0 && !cart?.find((item) => item.id === id)) {
			setCart([...cart, { ...item, quantity: 1 }]);
		}
		if (cart?.length > 0 && cart?.find((item) => item.id === id)) {
			setCart((currentCart) => {
				return currentCart.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			});
		}
	};

	const onReduceQuantity = (id) => {
		if (cart?.find((item) => item.id === id)?.quantity === 1) return;
		if (cart?.length > 0 && cart?.find((item) => item.id === id)) {
			setCart((currentCart) => {
				return currentCart.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			});
		}
	};

	const onRemoveItem = (id) => {
		setCart((currentCart) => {
			return currentCart.filter((item) => item.id !== id);
		});
	};

	const getItemQuantity = (id) => {
		return cart.find((item) => item.id === id)?.quantity || 0;
	};

	const subtotalCart = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				onAddQuantity,
				onReduceQuantity,
				onRemoveItem,
				subtotalCart,
				market,
				setMarket,
				categories,
				setCategories,
				onAddToCart,
				getItemQuantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};
