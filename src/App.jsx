import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
// import ROOT_URL from './constants/constants';
function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
