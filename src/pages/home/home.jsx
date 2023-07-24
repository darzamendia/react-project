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
import InitialLogo from '../../components/initialLogo/initialLogo';
import './home.css';
import './itemCartCard.css';
import { CartContext } from '../../context/cart-context';

function Home() {
	const navigate = useNavigate();
	const [itemsFiltered, setItemsFiltered] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);

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
	
	return (
		<div className='mainContainer'>
			<InitialLogo>test</InitialLogo>
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
						<ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} onAddToCart={onAddToCart} />))
					: market.map((items) => (
						<ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} onAddToCart={onAddToCart} /> ))
					}
			</div>
		</div>
	);
}

export default Home;
