import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
// import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
// import Counter from './components/counter/counter';
import Input from './components/input/input';
import ItemCard from './components/products/cards/itemCard';
import ContainerTitle from './components/containerTitle/containerTitle';
import ItemDetailCard from './components/itemdetailcontainer/itemDetailContainer';

function App() {
	const [counter, setCounter] = useState(0);
	const [task, setTask] = useState('');
	const [active, setActive] = useState(false);
	const [products, setProducts] = useState([]);
	const [showItemDetail, setShowItemDetail] = useState(false);
	const [itemDetail, setItemDetail] = useState(null);
	const [productsFiltered, setProductsFiltered] = useState([]);

	const isValidCounter = counter > 0;

	const incrementCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	const decrementCounter = () => {
		if (!isValidCounter) return;
		setCounter((prevCounter) => prevCounter - 1);
	};

	const filterBySearch = (query) => {
		let updateProductList = [...products];
		updateProductList = updateProductList.filter((item) => {
			return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
		});
		setProductsFiltered(updateProductList);
	};

	const onChange = (event) => {
		const value = event.target.value;
		setTask(value);
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

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await fetch('https://649a5d87bf7c145d0238c38f.mockapi.io/project-coderhouse', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error(error);
			}
		};
		getProducts();
	}, []);

	return (
		<>
			<Header logo='Keeb me!' />
			{/* <Counter
				counter={counter}
				onDecrementCounter={decrementCounter}
				onIncrementCounter={incrementCounter}
				isValidCounter={isValidCounter}
			/> */}
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
							{task.length > 0
								? productsFiltered.map((products) => <ItemCard {...products} onShowItemDetail={onShowItemDetail} />)
								: products.map((products) => <ItemCard {...products} onShowItemDetail={onShowItemDetail} />)}
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default App;
