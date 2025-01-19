import Container from './Container';
import Button from './Button';
import { useLocation } from "react-router-dom";

const AppNavbar = () => {
    const { pathname } = useLocation();

	return (
        <header className="navbar bg-base-300">
            <Container el={'nav'}>
                <>
                    <section className="flex-1">
                        <h1 className="text-xl">
                            ClownConnect 🤡
                        </h1>
                    </section>
                    <section className="flex gap-4">
                        <Button
                            text={'Home'}
                            variation="ghost"
                            to="/"
                            isActive={pathname === '/'}
                        />
                        <Button
                            text={'Jobs'}
                            variation="ghost"
                            to="/jobs"
                            isActive={pathname === '/jobs'}
                        />
                        <Button
                            text={'Add job'}
                            variation="ghost"
                        />
                    </section>
                </>
            </Container>
        </header>
	);
};

export default AppNavbar;