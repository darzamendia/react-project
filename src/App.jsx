import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
function App() {
	return (
		<div>
			<Routes>
				<Route path='/react-project/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
