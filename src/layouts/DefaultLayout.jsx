import { Outlet } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

const DefaultLayout = () => {
    return (
        <>
            <AppNavbar />
            <Outlet />
            <AppFooter />
        </>
    );
};

export default DefaultLayout;