export const BASE_URL = 'https://649a5d87bf7c145d0238c38f.mockapi.io';
export const ROOT_URL = '/react-project';

export const JSON_PATHS = {
	MARKET: {
		url: `${ROOT_URL}/src/json/market.json`,
	},
	CATEGORIES: {
		url: `${ROOT_URL}/src/json/category.json`,
	},
};

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
	CATEGORIES: {
		url: `${BASE_URL}/categories`,
		config: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	},
};
