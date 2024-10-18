import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full flex-col justify-between bg-gradient bg-cover bg-center bg-no-repeat">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
