import { Outlet } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';
import ScrollToTop from '../components/ScrollToTop';

const DefaultLayout = () => {
    return (
        <>
            <ScrollToTop />
            <AppNavbar />
            <Outlet />
            <AppFooter />
        </>
    );
};

export default DefaultLayout;