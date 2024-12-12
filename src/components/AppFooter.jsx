const AppFooter = () => {
    const copyright = () => `Copyright © ${new Date().getFullYear()} - All right reserved`; 

    return (
        <footer data-theme="light" className="footer footer-center p-12">
            <aside>
                <p className="text-4xl">🤡</p>
                <p className="font-bold">ClownConnect</p>
                <p className="mb-8">The ultimate destination for professional clowns</p>
                <p>{copyright()}</p>
            </aside>
        </footer>
    );
};

export default AppFooter;