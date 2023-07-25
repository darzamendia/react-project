import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants/constants';
import ItemDetailCard from '../../components/itemdetailcontainer/itemDetailContainer';
import ContainerTitle from '../../components/containerTitle/containerTitle';
import { useFetch } from '../../hooks/useFetch';
import './item-detail.css';
import Loader from '../../components/loader/loader';
import { useNavigate } from 'react-router';
import { ROOT_URL } from '../../constants/constants';

function ItemDetail() {
	const navigate = useNavigate();
	const { itemId } = useParams();
	const urlId = `${API_URL.PRODUCTS.url}/${itemId}`;
	const { data, loading, error } = useFetch(urlId, API_URL.PRODUCTS.config);

	const onBack = () => {
		navigate(`${ROOT_URL}`);
	};

	return (
		<div className='itemDetailContainer'>
			<button onClick={onBack} className='backHomeBtn'>
				Volver a home
			</button>
			<ContainerTitle title='Detalle del producto' />
			{loading ? <Loader /> : null}
			{error ? <h3>{error}</h3> : null}
			<div className='itemContainer'>
				<ItemDetailCard {...data} />
			</div>
		</div>
	);
}

export default ItemDetail;
