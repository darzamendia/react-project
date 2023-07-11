export const BASE_URL = 'https://649a5d87bf7c145d0238c38f.mockapi.io';
export const TEMP_BASE_URL = 'https://6499986579fbe9bcf83f9246.mockapi.io';
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
	CATEGORIES: {
		url: `${BASE_URL}/categories`,
		config: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	}
};

export const TEMP_URL = {
	CATEGORIES: {
		url: `${TEMP_BASE_URL}/categories`,
		config: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	}
};

