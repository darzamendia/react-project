import './categories.css';

function Categories({ onSelectCategory, type, categoryName, className }) {
	return (
		<button onClick={onSelectCategory} type={type} className={className}>
			<p className='categoryName'>{categoryName}</p>
		</button>
	);
}

export default Categories;
