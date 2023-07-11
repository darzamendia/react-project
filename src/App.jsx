import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import ItemDetail from './pages/item-detail/item-detail';
function App() {
	return (
		<div>
			<Header logo='Keeb me!' />
			<Routes>
				<Route path='/react-project/' element={<Home />} />
				<Route path='/react-project/item/:itemId' element={<ItemDetail />} />
			</Routes>
		</div>
	);
}

export default App;
