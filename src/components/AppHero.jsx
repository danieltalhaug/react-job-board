const AppHero = () => {
    return (
        <article className="hero bg-base-200 py-16">
            <section className="hero-content text-center">
                <div className="flex flex-col gap-8">
                    <h1 className="text-5xl font-bold">Find Your Next Big Giggle!</h1>
                    <div className="max-w-xl flex flex-col gap-4">
                        <p>
                            {'Welcome to ClownConnect, the ultimate destination for professional clowns and entertainers looking to connect with exciting opportunities!'}
                        </p>
                        <p>
                            {'Whether you\'re a seasoned performer or just starting to paint your first red nose, we bring you gigs tailored to your unique talents. From birthday parties to big-top circuses, corporate events to community fairs, ClownConnect is where humor meets opportunity. Our platform makes it easy to showcase your skills, book events, and grow your career while spreading joy and laughter.'}
                        </p>
                        <p>
                            {'Don\'t clown around, start your next adventure today!'}
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default AppHero;