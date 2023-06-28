import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
import Counter from './components/counter/counter';
import Input from './components/input/input';
import Card from './components/products/card/card';

function App() {
	const [counter, setCounter] = useState(0);
	const [task, setTask] = useState('');
	const [active, setActive] = useState(false);
	const [products, setProducts] = useState([]);

	const isValidCounter = counter > 0;

	const incrementCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	const decrementCounter = () => {
		if (!isValidCounter) return;
		setCounter((prevCounter) => prevCounter - 1);
	};

	const setTast = () => {};

	const onChange = (event) => {
		const value = event.target.value;
		setTast(value);
	};

	const onFocus = () => {
		setActive(true);
	};

	const onBlur = () => {
		setActive(false);
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

	// console.log({ products });

	return (
		<>
			<Header logo="Keeb me!" />
			<ItemListContainer
				itemTitleOne="SP-Star Meteor White"
				itemPriceOne="231"
				itemStockOne="100"
				itemTitleTwo="Novelkeys Cream Linear"
				itemPriceTwo="247"
				itemStockTwo="50"
				itemTitleThree="C³Equalz X TKC Tangerine"
				itemPriceThree="260"
				itemStockThree="25"
			/>
			<Counter
				counter={counter}
				onDecrementCounter={decrementCounter}
				onIncrementCounter={incrementCounter}
				isValidCounter={isValidCounter}
			/>
			<div style={{ width: '50%', padding: '10px' }}>
				<Input
					cntClassName={inputClass}
					placeholder="Ingrese su nombre completo..."
					labelName="Nombre completo"
					id="fullName"
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					active={active}
				/>
			</div>
			<div className="cardContainer">
				{products.map((products) => (
					<Card {...products} />
				))}
			</div>
		</>
	);
}

export default App;
