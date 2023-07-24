import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import ItemDetail from './pages/item-detail/item-detail';
import { CartProvider } from './context/cart-context';
function App() {
	return (
		<div>
			<CartProvider>
				<Header logo='Keeb me!' />
				<Routes>
					<Route path='/react-project/' element={<Home />} />
					<Route path='/react-project/item/:itemId' element={<ItemDetail />} />
					<Route path='/react-project/category/:itemCategory' element={<Home />} />
				</Routes>
			</CartProvider>
		</div>
	);
}

export default App;
