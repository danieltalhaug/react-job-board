import Container from './Container';
import Card from './Card';
import Button from './Button';

const cards = [
    {
        title: 'For clowns',
        subtitle: 'Browse our gigs to find the prfect job for you.',
        action: {
            text: 'Browse jobs',
            color: 'primary',
            to: '/jobs',
        }
    },
    {
        title: 'For employers',
        subtitle: 'List your job to hire a clown!',
        action: {
            text: 'Add job',
            color: 'secondary',
            to: '',
        }
    }
];

const HomeCards = () => {
	return (
        <div data-theme="light" className="py-32">
            <Container>
                <div className="flex gap-4 flex-col md:flex-row">
                    {cards.map(card => (
                        <Card
                            key={card.title}
                            title={card.title}
                            subtitle={card.subtitle}
                        >
                            <Button
                                text={card.action.text}
                                color={card.action.color}
                                to={card.action.to}
                            />
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
	);
};

export default HomeCards;