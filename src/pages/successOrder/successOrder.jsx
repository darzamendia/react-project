import { useLocation } from 'react-router-dom';
import './successOrder.css';

const SuccessOrder = () => {
	const location = useLocation();

	const { orderId } = location.state;

	return (
		<div>
			<h2>Success Order</h2>
			<p>Order Id: {orderId}</p>
		</div>
	);
};

export default SuccessOrder;
