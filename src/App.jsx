import AppNavbar from './components/AppNavbar';
import AppHero from './components/AppHero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
	return (
		<>
			<AppNavbar />
			<AppHero />
			<HomeCards />
			<JobListings />
		</>
	);
};

export default App;