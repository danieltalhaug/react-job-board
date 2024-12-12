import Container from './Container';
import Button from './Button';
import Card from './Card';
import jobs from '../jobs.json';

const shuffleArray = array => {
    const suffledArray = array;

    for (let i = suffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return suffledArray;
};

function getRandomJobs() {
    const availableJobs = shuffleArray(jobs);
    const selectedJobs = [];
    const limit = 9;

    for (let i = 0; i < limit; i++) {
        selectedJobs.push(availableJobs[i]);
    }

    return selectedJobs;
}

const JobListings = () => {
	return (
        <Container el="article">
            <header className="py-16 text-center">
                <h2 className="text-3xl font-bold">
                    Browse jobs
                </h2>
            </header>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {getRandomJobs().map((job) => (
                    <Card
                        key={job.id}
                        preTitle={job.salary}
                        title={job.title}
                        subtitle={job.description}
                        theme="light"
                    >
                        <Button text="Read more" color="primary" outline />
                    </Card>
                ))}
            </section>
        </Container>
	);
};

export default JobListings;