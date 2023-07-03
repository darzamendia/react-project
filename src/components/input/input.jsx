import './input.css';

const Input = ({
	id,
	placeholder,
	type = 'text',
	required = false,
	labelName,
	onFocus,
	onChange,
	onBlur,
	value,
	cntClassName,
}) => {
	return (
		<div className={cntClassName}>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				required={required}
				onFocus={onFocus}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			<label htmlFor={id}>{labelName}</label>
		</div>
	);
};

export default Input;
