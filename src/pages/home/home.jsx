import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants/constants';
// import { JSON_PATHS } from '../../constants/constants';
import { ROOT_URL } from '../../constants/constants';
import ItemCard from '../../components/items/cards/itemCard';
import ContainerTitle from '../../components/containerTitle/containerTitle';
import Loader from '../../components/loader/loader';
import Slider from '../../components/slider/slider';
import './home.css';
import './itemCartCard.css';
import { CartContext } from '../../context/cart-context';

function Home() {
	const navigate = useNavigate();
	const [itemsFiltered, setItemsFiltered] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	// const [cart, setCart] = useState([]);

	const { setMarket, market: marketContext, onAddToCart, cart } = useContext(CartContext);

	const {
		data: market,
		loading: loadingMarket,
		error: errorMarket,
	} = useFetch(API_URL.PRODUCTS.url, API_URL.PRODUCTS.config);

	const {
		data: categories,
		loading: loadingCaterogies,
		error: errorCategories,
	} = useFetch(API_URL.CATEGORIES.url, API_URL.CATEGORIES.config);

	useEffect(() => {
		if (market?.length > 0) {
			setMarket(market);
		}
	}, [market, setMarket]);

	// const { data: items, loading: loadingMarket, error: errorMarket } = useFetch(JSON_PATHS.MARKET.url);
	// const { data: categories, loading: loadingCaterogies, error: errorCategories } = useFetch(JSON_PATHS.CATEGORIES.url);

	// const { data: marketAux, loading: loadingMarket, error: errorMarket } = useFetch(JSON_PATHS.MARKET.url);
	// const {
	// 	data: categoriesAux,
	// 	loading: loadingCateroriesAux,
	// 	error: errorCategoriesAux,
	// } = useFetch(JSON_PATHS.CATEGORIES.url);

	const onShowItemDetail = (id) => {
		navigate(`${ROOT_URL}/item/${id}`);
	};

	const onFilter = (name) => {
		navigate(`${ROOT_URL}/category/${name}`);
		setIsFiltered(true);
		const itemByCategory = market.filter((item) => item.category === name);
		setItemsFiltered(itemByCategory);
	};

	const onResetCategory = () => {
		navigate(`${ROOT_URL}/`);
		setIsFiltered(false);
		setItemsFiltered([]);
	};

	// const sumTotalCart = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	console.log({ marketContext, cart });

	return (
		<>
			<div className='mainContainer'>
				{/* <div>
					<h2>Carrito</h2>
					{cart.length === 0 && <h3>Empty</h3>}
					{cart?.length > 0 &&
						cart.map((cartItem) => (
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
						))}
				</div> */}
				{/* {cart?.length > 0 && <p className='subtotalCartPrice'>Total: ${sumTotalCart}</p>} */}
				<div className='categoriesContainer'>
					{errorCategories && <h3>{errorMarket}</h3>}
					<Slider>
						{isFiltered && (
							<button onClick={onResetCategory} className='categoryContainerAll'>
								<p className='categoryName'>All switches</p>
							</button>
						)}
						{categories.map((category) => (
							<button key={category.name} onClick={() => onFilter(category.name)} className='categoryContainer'>
								<p key={category.id} className='categoryName'>
									{category.name}
								</p>
							</button>
						))}
					</Slider>
				</div>
				<ContainerTitle title='Productos' />
				<div className='itemContainer'>
					{loadingMarket && <Loader />}
					{errorMarket && <h3>{errorMarket}</h3>}
					{isFiltered && itemsFiltered.length === 0 && <h2>Not found</h2>}
					{isFiltered
						? itemsFiltered.map((items) => (
								<ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} onAddToCart={onAddToCart} />
						  ))
						: market.map((items) => (
								<ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} onAddToCart={onAddToCart} />
						  ))}
				</div>
			</div>
		</>
	);
}

export default Home;
