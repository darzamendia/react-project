const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
const surnameRegex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
const documentRegex = /^[0-9]{8,15}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegex = /^[0-9]{7,15}$/;
const addressRegex = /^[a-zA-ZÀ-ÿ0-9\s]{8,80}$/;
const postalCodeRegex = /^[0-9]{3,10}$/;

export const validateInput = ({ type, value }) => {
	let hasError = false;
	let error = '';
	const formatValue = value.trim();

	switch (type) {
		case 'name':
			if (formatValue === '') {
				hasError = true;
				error = '* El nombre es obligatorio';
			} else if (!nameRegex.test(formatValue)) {
				hasError = true;
				error = '* El nombre ingresado es inválido';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'surname':
			if (formatValue === '') {
				hasError = true;
				error = '* El apellido es obligatorio';
			} else if (!surnameRegex.test(formatValue)) {
				hasError = true;
				error = '* El apellido ingresado es inválido';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'document':
			if (formatValue === '') {
				hasError = true;
				error = '* El documento es obligatorio';
			} else if (!documentRegex.test(formatValue)) {
				hasError = true;
				error = '* El DNI ingresado es inválido';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'email':
			if (formatValue === '') {
				hasError = true;
				error = '* El correo electrónico es obligatorio';
			} else if (!emailRegex.test(formatValue)) {
				hasError = true;
				error = '* El correo electrónico ingresado es inválido';
			} else if (value != email02.value && email02.value !== '') {
				hasError = true;
				error = 'Los correos electrónicos deben ser iguales';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'email02':
			if (formatValue === '') {
				hasError = true;
				error = '* El correo electrónico es obligatorio';
			} else if (!emailRegex.test(formatValue)) {
				hasError = true;
				error = '* El correo electrónico ingresado es inválido';
			} else if (value != email.value) {
				hasError = true;
				error = 'Los correos electrónicos deben ser iguales';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'phone':
			if (formatValue === '') {
				hasError = true;
				error = '* El teléfono es obligatorio';
			} else if (!phoneRegex.test(formatValue)) {
				hasError = true;
				error = '* El número de teléfono ingresado es inválido';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'address':
			if (formatValue === '') {
				hasError = true;
				error = '* El domicilio es obligatorio';
			} else if (!addressRegex.test(formatValue)) {
				hasError = true;
				error = '* El domicilio ingresado es inválido';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'postalCode':
			if (formatValue === '') {
				hasError = true;
				error = '* El código postal es obligatorio';
			} else if (!postalCodeRegex.test(formatValue)) {
				hasError = true;
				error = '* El código postal ingresado es inválido';
			} else {
				hasError = false;
				error = '';
			}
			break;
		default:
			hasError = false;
			error = '';
			break;
	}

	return { hasError, error };
};
