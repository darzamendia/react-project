import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: import.meta.env.VITE_APP_API_KEY,

// authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,

// projectId: import.meta.env.VITE_APP_PROJECT_ID,

// storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,

// messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,

// appId: import.meta.env.VITE_APP_APP_ID,

// };

const firebaseConfig = {
	apiKey: 'AIzaSyCFrrl7Q1zHa4nra0TQye1nqTaY0cQney0',

	authDomain: 'project-coderhouse-40fe9.firebaseapp.com',

	projectId: 'project-coderhouse-40fe9',

	storageBucket: 'project-coderhouse-40fe9.appspot.com',

	messagingSenderId: '761716474951',

	appId: '1:761716474951:web:32f3bc02e1bf83271f1d62',
};
// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
