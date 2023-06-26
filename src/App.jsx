import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import Counter from './components/counter/counter'
import Input from './components/input/input'

function App() {
	const [counter, setCounter] = useState(0)
	const [task, setTask] = useState('')
	const [active, setActive] = useState(false)

	const isValidCounter = counter > 0

	const incrementCounter = () => {
		setCounter((prevCounter) => prevCounter + 1)
	}

	const decrementCounter = () => {
		if (!isValidCounter) return
		setCounter((prevCounter) => prevCounter - 1)
	}

	const setTast = () => {}

	const onChange = (event) => {
		const value = event.target.value
		setTast(value)
	}

	const onFocus = () => {
		setActive(true)
	}

	const onBlur = () => {
		setActive(false)
	}

	const inputClass = `container ${active ? 'active' : ''}`

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
				/>
			</div>
		</>
	)
}

export default App
