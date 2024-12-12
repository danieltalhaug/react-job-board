import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppNavbar />
		<App />
		<AppFooter />
	</StrictMode>,
);
