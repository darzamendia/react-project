import './loader.css';

const Loader = () => {
	return (
		<>
			<div className='spinner-container'>
				<div className='loader-spinner'></div>
			</div>
			<p>Loading data, please wait...</p>
		</>
	);
};

export default Loader;
