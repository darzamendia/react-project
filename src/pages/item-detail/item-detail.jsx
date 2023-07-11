import {useParams } from 'react-router-dom';
import { API_URL } from '../../constants/constants';
import ItemDetailCard from '../../components/itemdetailcontainer/itemDetailContainer';
import ContainerTitle from '../../components/containerTitle/containerTitle';
import { useFetch } from '../../hooks/useFetch';
import './item-detail.css';
import Loader from '../../components/loader/loader';
import { useNavigate } from 'react-router';

function ItemDetail() {
	const navigate = useNavigate();
	const { itemId } = useParams();
	const urlId = `${API_URL.PRODUCTS.url}/${itemId}`;
	console.log(urlId);
	const { data, loading, error } = useFetch(urlId, API_URL.PRODUCTS.config);

	const onBack = () => {
		navigate(`/react-project/`)
	};

	return (
		<>
			<button onClick={onBack}>Volver a home</button>
			<ContainerTitle title='Detalle del producto' />
			{loading && <Loader />}
			{error && <h3>{error}</h3>}
			<div className='itemContainer'>
				<ItemDetailCard {...data} />
			</div>
		</>
	);
}

export default ItemDetail;
