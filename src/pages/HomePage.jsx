import FrontPageHero from '../components/FrontPageHero';
import FrontPageCards from '../components/FrontPageCards';
import JobListings from '../components/JobListings';
import Button from '../components/Button';

const HomePage = () => {
    return (
        <>
            <FrontPageHero />
            <FrontPageCards />
            <JobListings limit="6" />
            <section className="flex mb-16 justify-center">
                <Button
                    text={'View more'}
                    variation="ghost"
                    to="/jobs"
                />
            </section>
        </>
    );
};

export default HomePage;