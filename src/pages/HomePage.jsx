import FrontPageHero from '../components/FrontPageHero';
import FrontPageCards from '../components/FrontPageCards';
import JobListings from '../components/JobListings';

const HomePage = () => {
    return (
        <>
            <FrontPageHero />
            <FrontPageCards />
            <JobListings limit="6" />
        </>
    );
};

export default HomePage;