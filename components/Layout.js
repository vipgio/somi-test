import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
	return (
		<div className='bg-gradient h-screen w-full bg-cover bg-center bg-no-repeat'>
			<Header />
			{children}
			{/* <div className='py-10'>{children}</div>
			<Footer /> */}
		</div>
	);
};

export default Layout;
