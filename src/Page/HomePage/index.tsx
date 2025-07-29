import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../../Components/base/Header';
import { useEffect, useState } from 'react';

import Footer from '../../Components/NM/common/Footer';
import ChatBox from '../../Components/ChatBox';
interface IconButtonProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	customColor?: string;
}
import styles from './styles.module.css';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok } from 'react-icons/bi';
import Chatbot from '../../Components/Chatbot/Chatbot';

const HomePage = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/' ? 'main' : 'sub';
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		setCollapsed(false);
		window.scrollTo(0, 0);
	}, [isHomePage, location]);

	return (
		<>
			<Chatbot />

			{/* khoi facebook, instagram, tiktok o góc dưới bên phải */}
			{/* <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
				<a
					href="https://www.facebook.com/profile.php?id=61577276590314"
					target="_blank"
					title="Facebook"
					className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-100"
				>
					<IconButton Icon={BiLogoFacebook} customColor="#333" />
				</a>

				<a
					href="https://www.instagram.com/khangtinhan2605/ "
					target="_blank"
					title="Zalo"
					className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-100"
				>
					<IconButton Icon={BiLogoInstagram} customColor="#333" />
				</a>

				<a
					href="https://www.tiktok.com/@user734347781176129?lang=en"
					className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-green-100"
				>
					<IconButton Icon={BiLogoTiktok} customColor="#333" />
				</a>
			</div> */}

			<div className="relative bg-[#FEFAF5]">
				<Header
					type={isHomePage}
					toggleCollapsed={toggleCollapsed}
					collapsed={collapsed}
				/>
				<main className="pt-[120px]">
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default HomePage;

const IconButton: React.FC<IconButtonProps> = ({ Icon, customColor }) => (
	<div className={styles.iconWrapper}>
		<Icon className={`${styles.icon}`} style={{ color: customColor }} />
		<Icon className={`${styles.iconWhite}`} />
	</div>
);



