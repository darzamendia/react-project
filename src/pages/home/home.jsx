import { useState } from 'react';
import './home.css';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import ItemCard from '../../components/products/cards/itemCard';
import ContainerTitle from '../../components/containerTitle/containerTitle';
import ItemDetailCard from '../../components/itemdetailcontainer/itemDetailContainer';
import Loader from '../../components/loader/loader';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants/constants';

function Home() {
	const [search, setSearch] = useState('');
	const [active, setActive] = useState(false);
	const [showItemDetail, setShowItemDetail] = useState(false);
	const [itemDetail, setItemDetail] = useState(null);
	const [productsFiltered, setProductsFiltered] = useState([]);

	const { data: products, loading, error } = useFetch(API_URL.PRODUCTS.url, API_URL.PRODUCTS.config);

	const filterBySearch = (query) => {
		let updateProductList = [...products];
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
		setShowItemDetail(true);
		const itemFound = products.find((products) => products.id === id);
		setItemDetail(itemFound);
	};

	const inputClass = `container ${active ? 'active' : ''}`;

	// console.log({ loading, error, products });

	return (
		<>
			<Header logo='Keeb me!' />
			<div className='mainContainer'>
				{showItemDetail ? (
					<>
						<button onClick={() => setShowItemDetail(false)}>Back</button>
						<ContainerTitle title='Detalle del producto' />
						<div className='itemContainer'>
							<ItemDetailCard {...itemDetail} />
						</div>
					</>
				) : (
					<>
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
							{loading && <Loader />}
							{error && <h3>{error}</h3>}
							{search.length > 0 && productsFiltered.length === 0 && <h2>Not found</h2>}
							{search.length > 0
								? productsFiltered.map((products) => (
										<ItemCard key={products.id} {...products} onShowItemDetail={onShowItemDetail} />
								  ))
								: products.map((products) => (
										<ItemCard key={products.id} {...products} onShowItemDetail={onShowItemDetail} />
								  ))}
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Home;
