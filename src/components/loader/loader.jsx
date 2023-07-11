import './loader.css';

const Loader = () => {
	return (
		<>
			<div className='spinner-container'>
				<div className='loader-spinner'></div>
				<p>Loading data, please wait...</p>
			</div>
		</>
	);
};

export default Loader;
