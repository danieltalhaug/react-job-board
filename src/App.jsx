import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route index element={<HomePage />} />
			<Route path="/jobs" element={<JobsPage />} />
		</>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;