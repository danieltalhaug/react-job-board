import AppNavbar from './components/AppNavbar';
import AppHero from './components/AppHero';
import AppFooter from './components/AppFooter';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
	return (
		<>
			<AppNavbar />
			<AppHero />
			<HomeCards />
			<JobListings />
			<AppFooter />
		</>
	);
};

export default App;