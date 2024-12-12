import FrontPageHero from '../components/FrontPageHero';
import FrontPageCards from '../components/FrontPageCards';
import JobListings from '../components/JobListings';

const HomePage = () => {
    return (
        <>
            <FrontPageHero />
            <FrontPageCards />
            <JobListings />
        </>
    );
};

export default HomePage;