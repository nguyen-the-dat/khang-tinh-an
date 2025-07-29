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

			<div className="relative bg-[#FEFAF5]">
				<Header
					type={isHomePage}
					toggleCollapsed={toggleCollapsed}
					collapsed={collapsed}
				/>
				<main className="pt-[30px]">
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
