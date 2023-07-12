import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants/constants';
import { ROOT_URL } from '../../constants/constants';
import ItemCard from '../../components/items/cards/itemCard';
import ContainerTitle from '../../components/containerTitle/containerTitle';
import Loader from '../../components/loader/loader';
import Slider from '../../components/slider/slider';
import './home.css';

function Home() {
	const navigate = useNavigate();
	const [itemsFiltered, setItemsFiltered] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);

	const {
		data: items,
		loading: loadingItems,
		error: errorItems,
	} = useFetch(API_URL.PRODUCTS.url, API_URL.PRODUCTS.config);
	const {
		data: categories,
		loading: loadingCaterogies,
		error: errorCategories,
	} = useFetch(API_URL.CATEGORIES.url, API_URL.CATEGORIES.config);

	const onShowItemDetail = (id) => {
		navigate(`${ROOT_URL}/item/${id}`);
	};

	const onFilter = (name) => {
		navigate(`${ROOT_URL}/category/${name}`);
		setIsFiltered(true);
		const itemByCategory = items.filter((item) => item.category === name);
		setItemsFiltered(itemByCategory);
	};

	const onResetCategory = () => {
		navigate(`${ROOT_URL}/`);
		setIsFiltered(false);
		setItemsFiltered([]);
	};

	return (
		<>
			<div className='mainContainer'>
				<div className='categoriesContainer'>
					{errorCategories && <h3>{errorItems}</h3>}
					<Slider>
						{isFiltered && (
							<button onClick={onResetCategory} className='categoryContainer'>
								<p className='categoryName'>All</p>
							</button>
						)}
						{categories.map((category) => (
							<button onClick={() => onFilter(category.name)} className='categoryContainer'>
								<p key={category.id} className='categoryName'>
									{category.name}
								</p>
							</button>
						))}
					</Slider>
				</div>
				<ContainerTitle title='Productos' />
				<div className='itemContainer'>
					{loadingItems && <Loader />}
					{errorItems && <h3>{errorItems}</h3>}
					{isFiltered && itemsFiltered.length === 0 && <h2>Not found</h2>}
					{isFiltered
						? itemsFiltered.map((items) => <ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} />)
						: items.map((items) => <ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} />)}
				</div>
			</div>
		</>
	);
}

export default Home;
