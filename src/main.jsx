import React from 'react';
import ReactDOM from 'react-dom/client';
//import {GifExpertApp} from './GifExpertApp';
//import { BookLibraryApp } from './BookLibraryApp';
import { ImageLibraryApp } from './ImageLibraryApp';
import './assets/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ImageLibraryApp />
	</React.StrictMode>
);
