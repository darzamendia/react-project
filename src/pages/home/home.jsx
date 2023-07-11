import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants/constants';
import { TEMP_URL } from '../../constants/constants';
import Input from '../../components/input/input';
import ItemCard from '../../components/items/cards/itemCard';
import ContainerTitle from '../../components/containerTitle/containerTitle';
import Loader from '../../components/loader/loader';
import Slider from '../../components/slider/slider';
import './home.css';

function Home() {
	const navigate = useNavigate();
	const [search, setSearch] = useState('');
	const [active, setActive] = useState(false);
	// const [showItemDetail, setShowItemDetail] = useState(false);
	// const [itemDetail, setItemDetail] = useState(null);
	const [productsFiltered, setProductsFiltered] = useState([]);

	const { data: items, loading: loadingItems, error: errorItems } = useFetch(API_URL.PRODUCTS.url, API_URL.PRODUCTS.config);
	const { data: categories, loading: loadingCaterogies, error: errorCategories } = useFetch(TEMP_URL.CATEGORIES.url, TEMP_URL.CATEGORIES.config);

	const filterBySearch = (query) => {
		let updateProductList = [...items];
		updateProductList = updateProductList.filter((item) => {
			return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
		});
		setProductsFiltered(updateProductList);
	};

	const onChange = (event) => {
		const value = event.target.value;
		setSearch(value);
		filterBySearch(value);
	};

	const onFocus = () => {
		setActive(true);
	};

	const onBlur = () => {
		setActive(false);
	};

	const onShowItemDetail = (id) => {
		navigate(`/react-project/item/${id}`)
	};

	const inputClass = `container ${active ? 'active' : ''}`;

	return (
		<>
			<div className='mainContainer'>
				<div className="categoriesContainer">
					{loadingCaterogies && <Loader />}
					{errorCategories && <h3>{errorItems}</h3>}
					<Slider>
					{
						categories.map((category) => (
							<div className="categoryContainer">
								<p key={category.id} className='categoryName'>{category.name}</p>
							</div>
						))
					}
					</Slider>
				</div>
				<Input
					cntClassName={inputClass}
					placeholder='Buscar producto...'
					labelName='Producto'
					id='fullName'
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					active={active}
				/>
				<ContainerTitle title='Productos' />
				<div className='itemContainer'>
					{loadingItems && <Loader />}
					{errorItems && <h3>{errorItems}</h3>}
					{search.length > 0 && productsFiltered.length === 0 && <h2>Not found</h2>}
					{search.length > 0
						? productsFiltered.map((items) => (
								<ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} />
						))
						: items.map((items) => (
								<ItemCard key={items.id} {...items} onShowItemDetail={onShowItemDetail} />
						))}
				</div>
			</div>
		</>
	);
}

export default Home;
