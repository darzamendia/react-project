export const BASE_URL = 'https://649a5d87bf7c145d0238c38f.mockapi.io';

export const ROOT_URL = '/react-project/';

export const API_URL = {
	PRODUCTS: {
		url: `${BASE_URL}/items`,
		config: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	},
};
