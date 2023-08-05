import { useLocation } from 'react-router-dom';
import './successOrder.css';
// import './initialLogo.css';
import { ROOT_URL } from '../../constants/constants';
import successLogo from '../../assets/success-logo.svg';
import { useNavigate } from 'react-router';
const SuccessOrder = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { orderId } = location.state;
	const onBack = () => {
		navigate(`${ROOT_URL}`);
	};

	return (
		<>
			<div className='successOrderContainer'>
				<div className='LogoContainer'>
					<img src={successLogo} className='successLogo' />
				</div>
				<h1 className='successOrderTitle'>Compra finalizada!</h1>
				<p className='successOrderContent'>
					Recibimos tu solicitud de compra. A continuación te dejamos el número de ID:{' '}
				</p>
				<p className='successOrderCode'>{orderId}</p>
			</div>
			<div className='successAction'>
				<button onClick={onBack} className='successBackHomeBtn'>
					Volver a home
				</button>
			</div>
		</>
	);
};

export default SuccessOrder;
