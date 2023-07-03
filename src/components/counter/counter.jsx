const Counter = ({ counter, onDecrementCounter, onIncrementCounter, isValidCounter }) => {
	return (
		<div className='counterContainer'>
			<h2>Counter</h2>
			<div className='buttonContainer'>
				<button className='buttonCounter' onClick={onDecrementCounter} disabled={!isValidCounter}>
					-
				</button>
				<p className='counterText'>{counter}</p>
				<button className='buttonCounter' onClick={onIncrementCounter}>
					+
				</button>
			</div>
		</div>
	);
};

export default Counter;
