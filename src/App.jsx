import './App.css';
import Header from './components/header/header';
import { CartProvider } from './context/cart-context';
import Navigation from './navigation/navigation';
function App() {
	return (
		<div>
			<CartProvider>
				<Header logo='Keeb me!' />
				<Navigation />
			</CartProvider>
		</div>
	);
}

export default App;
