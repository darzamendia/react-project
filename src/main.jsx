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
