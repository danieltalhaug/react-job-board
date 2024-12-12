import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import DefaultLayout from './layouts/DefaultLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<DefaultLayout />}>
			<Route index element={<HomePage />} />
			<Route path="/jobs" element={<JobsPage />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;