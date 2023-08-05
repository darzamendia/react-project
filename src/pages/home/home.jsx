import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants/constants';
import { ROOT_URL } from '../../constants/constants';
import { CartContext } from '../../context/cart-context';
import Input from '../../components/input/input';
import ItemCard from '../../components/items/cards/itemCard';
import ContainerTitle from '../../components/containerTitle/containerTitle';
import Loader from '../../components/loader/loader';
import Slider from '../../components/slider/slider';
import InitialLogo from '../../components/initialLogo/initialLogo';
import Categories from '../../components/categories/categories';
import './home.css';

function Home() {
	const navigate = useNavigate();
	const [active, setActive] = useState(false);
	const [isFiltered, setIsFiltered] = useState(false);
	const [itemsFiltered, setItemsFiltered] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('All');

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

	const filterBySearch = (query) => {
		if (selectedCategory !== 'All switches' && query.length === 0) {
			onFilter(selectedCategory);
			return;
		}
		let updateProductList = query.length === 0 ? [...products] : [...itemsFiltered];

		updateProductList = updateProductList.filter((item) => {
			return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
		});

		setItemsFiltered(updateProductList);
	};

	const onChange = (event) => {
		const value = event.target.value;
		filterBySearch(value);
	};

	const onFocus = () => {
		setActive(true);
	};

	const onBlur = () => {
		setActive(false);
	};

	useEffect(() => {
		if (market?.length > 0) {
			setMarket(market);
		}
	}, [market, setMarket]);

	const onShowItemDetail = (id) => {
		navigate(`${ROOT_URL}/item/${id}`);
	};

	const onFilter = (name) => {
		navigate(`${ROOT_URL}/category/${name}`);
		setIsFiltered(true);
		const itemByCategory = market.filter((item) => item.category === name);
		setItemsFiltered(itemByCategory);
		setSelectedCategory(name);
	};

	const onResetCategory = () => {
		navigate(`${ROOT_URL}/`);
		setIsFiltered(false);
		setItemsFiltered([]);
	};

	return (
		<div className='mainContainer'>
			<InitialLogo />
			<div className='categoriesContainer'>
				{errorCategories ? <h3>{errorMarket}</h3> : null}
				<Slider>
					{isFiltered && (
						<Categories
							categoryName='All switches'
							onSelectCategory={onResetCategory}
							type='button'
							className='categoryContainerAll'
						/>
					)}
					{categories.map((category) => (
						<Categories
							key={category.name}
							categoryName={category.name}
							onSelectCategory={() => onFilter(category.name)}
							type='button'
							className='categoryContainer'
						/>
					))}
				</Slider>
			</div>
			<div className='inputContainer'>
				{isFiltered ? (
					<>
						<Input
							placeholder='find a product'
							id='task'
							name='Search'
							required={true}
							label='Search'
							onChange={onChange}
							onFocus={onFocus}
							onBlur={onBlur}
							active={active}
						/>
					</>
				) : null}
			</div>
			<ContainerTitle title='Productos' />
			<div className='itemContainer'>
				{loadingMarket ? <Loader /> : null}
				{errorMarket ? <h3>{errorMarket}</h3> : null}
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
	);
}

export default Home;
